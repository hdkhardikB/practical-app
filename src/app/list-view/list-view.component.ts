import { Component, OnInit } from '@angular/core';
import { WorkerDataService } from '../worker-data.service';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  workOrders = [1, 2, 3];
  messages = [{ form: 'hardik', subject: 'test', content: 'hello there' }, { form: 'hardik', subject: 'test', content: 'hello there' }, { form: 'hardik', subject: 'test', content: 'hello there' }, { form: 'hardik', subject: 'test', content: 'hello there' }]
  constructor(private worker: WorkerDataService) { }

  ngOnInit() {
    this.worker.getJobList().subscribe(data => {
      if (data)
        this.workOrders = data;
    });
  }

}
