import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-modal-job-detail',
  templateUrl: './modal-job-detail.component.html',
  styleUrls: ['./modal-job-detail.component.css']
})
export class ModalJobDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
