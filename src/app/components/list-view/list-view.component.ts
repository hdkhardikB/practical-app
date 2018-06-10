import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { WorkerDataService } from '../../services/worker-data.service';
import { Job_Entity } from '../../models/job-detail';
import { MatDialog } from '@angular/material';
import { ModalJobDetailComponent } from '../modal-job-detail/modal-job-detail.component';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  workOrders: Job_Entity[];
  statusList: Array<any> = [{ key: 'All', value: '' }, { key: 'New', value: 'New' }, { key: 'In Progress', value: 'In Progress' }, { key: 'Done', value: 'Done' }];
  selectedStatus = this.statusList[0];
  constructor(private worker: WorkerDataService, public dialog: MatDialog, private _changeDetectionRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.worker.getJobList().subscribe((data: Job_Entity[]) => {
      if (data)
        this.workOrders = data;
    });
    this.worker.getCategories
  }

  onStautsChange() {
    this.worker.getJobByStatus(this.selectedStatus.value).subscribe((data: Job_Entity[]) => {
      if (data) {
        this.workOrders = data;
      }
    });
  }

  openDialog(jobId: Number, itemIndex: any) {
    let dialog = this.dialog.open(ModalJobDetailComponent, {
      data: {
        jobId: jobId
      }
    });

    dialog.afterClosed().subscribe((data: any) => {
      if (data) {
        this.workOrders[itemIndex].Status = data.status;
      }
    });
  }
}
