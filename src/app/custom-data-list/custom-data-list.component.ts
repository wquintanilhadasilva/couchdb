import { Component, OnInit, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-custom-data-list',
  templateUrl: './custom-data-list.component.html',
  styleUrls: ['./custom-data-list.component.css']
})
export class CustomDataListComponent implements OnInit {

  @Input()
  dataList: Array<any>;

  @Input()
  rowTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.rowTemplate);
    console.log(this.dataList);
  }

}
