import { Component, OnInit } from '@angular/core';
import { WorkerDataService } from '../../worker-data.service';
import { Job_Entity } from '../../job-detail';
import { MatDialog } from '@angular/material';
import { ModalJobDetailComponent } from '../modal-job-detail/modal-job-detail.component';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  workOrders: Job_Entity[];
  messages = [{ form: 'hardik', subject: 'test', content: 'hello there' }, { form: 'hardik', subject: 'test', content: 'hello there' }, { form: 'hardik', subject: 'test', content: 'hello there' }, { form: 'hardik', subject: 'test', content: 'hello there' }]
  constructor(private worker: WorkerDataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.worker.getJobList().subscribe((data: Job_Entity[]) => {
      if (data)
        this.workOrders = data;
    });
  }
  openDialog() {
    this.dialog.open(ModalJobDetailComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
}
