import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { WorkerDataService } from '../../services/worker-data.service';
import { JobDetail } from '../../models/job-detail';
import { ModalJobDetailComponent } from '../modal-job-detail/modal-job-detail.component';
import { CustomValidator } from '../../custom-validator';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.css']
})
export class NewJobComponent implements OnInit {
  categories = [];
  jobDetail: JobDetail = new JobDetail();

  jobForm: FormGroup;
  constructor(private worker: WorkerDataService, private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.worker.getCategories().subscribe((res: any) => {
      this.categories = res;
    });
    this.jobDetail.Status = "New";
  }

  ngOnInit() {
    this.jobForm = this.fb.group({
      jobName: new FormControl('', [Validators.maxLength(50)], [CustomValidator.uniqueJob(this.worker)]),
      description: new FormControl(),
      category: new FormControl('', [
        Validators.required
      ]),
      supervisorName: new FormControl(Validators.maxLength(50)),
      supervisorEmail: new FormControl('', [Validators.email, Validators.required])

    });
  }

  saveJob() {
    this.worker.createJob(this.jobDetail).subscribe((data: any) => {
      this.toastr.success('Job has been created successfully', 'Success');
      this.router.navigate(['/main']);
    }, (err: any) => {
      this.toastr.error('There was an error serving your request.', 'Error');
    });
  }

}
