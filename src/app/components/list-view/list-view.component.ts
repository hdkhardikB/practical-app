import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { WorkerDataService } from '../../services/worker-data.service';
import { Job_Entity } from '../../models/job-detail';
import { MatDialog } from '@angular/material';
import { ModalJobDetailComponent } from '../modal-job-detail/modal-job-detail.component';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  workOrders: Job_Entity[];
  statusList: Array<any> = [{ key: 'All', value: '' }, { key: 'New', value: 'New' }, { key: 'In Progress', value: 'In Progress' }, { key: 'Done', value: 'Done' }];
  selectedStatus = this.statusList[0];
  constructor(private worker: WorkerDataService, private spinner: NgxSpinnerService, private toaster: ToastrService, public dialog: MatDialog, private _changeDetectionRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.spinner.show();
    this.worker.getJobList().subscribe((data: Job_Entity[]) => {
      if (data)
        this.workOrders = data;
      this.spinner.hide();
    }, (err: any) => {
      this.spinner.hide();
      this.toaster.error('There was an error serving you request.', 'Error');
    });
  }

  /**
   * An event to be called on change of status.
   */
  onStautsChange() {
    this.spinner.show();
    this.worker.getJobByStatus(this.selectedStatus.value).subscribe((data: Job_Entity[]) => {
      if (data) {
        this.workOrders = data;
      }
      this.spinner.hide();      
    }, (err: any) => {
      this.spinner.hide();
      this.toaster.error('There was an error serving you request.', 'Error');
    });
  }

  /**
   * Opens the job detail dialog to show details
   * @param jobId - an id of the job to be creatd.
   * @param itemIndex - an index of item in aray.
   */
  openDialog(jobId: Number, itemIndex: any) {
    this.spinner.show();
    this.worker.getJobById(jobId).subscribe((resp: Job_Entity) => {
      let jobDetail = resp;
      this.spinner.hide();
      let dialog = this.dialog.open(ModalJobDetailComponent, {
        data: jobDetail
      });

      dialog.afterClosed().subscribe((data: any) => {
        if (data) {
          this.workOrders[itemIndex].Status = data.status;
        }
      });
    }, (err: any) => {
      this.spinner.hide();
      this.toaster.error('There was an error serving you request.', 'Error');
    });

  }
}
