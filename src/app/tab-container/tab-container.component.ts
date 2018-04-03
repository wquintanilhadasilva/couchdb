import { Component, OnInit, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent implements OnInit {

  @Input()
  headerTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
