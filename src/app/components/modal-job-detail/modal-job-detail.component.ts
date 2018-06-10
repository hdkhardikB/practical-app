import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { WorkerDataService } from '../../services/worker-data.service';
import { Job_Entity } from '../../models/job-detail';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-modal-job-detail',
  templateUrl: './modal-job-detail.component.html',
  styleUrls: ['./modal-job-detail.component.css']
})
export class ModalJobDetailComponent implements OnInit {
  jobDetail: Job_Entity;
  statusList = ['New', 'In Progress', 'Done'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private worker: WorkerDataService, private toast: ToastrService, public dialogRef: MatDialogRef<ModalJobDetailComponent>) {
    this.worker.getJobById(data.jobId).subscribe((resp: Job_Entity) => {
      this.jobDetail = resp;
    });
  }

  ngOnInit() {
  }
  updateStatus() {
    this.worker.updateJobStatus(this.jobDetail.Status, this.jobDetail.Id).subscribe(() => {
      this.toast.success("Job status updated successfully.","Success");
      this.dialogRef.close({ jobId: this.jobDetail.Id, status: this.jobDetail.Status });
    }, (err: any) => {
      this.toast.success("There was an error serving your request.","Error");
    })
  }
}
