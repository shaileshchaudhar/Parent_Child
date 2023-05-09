
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  ChildData:string="i am childcomponent";
  @Input() Item:string=''
  @Output() ClickforMe:EventEmitter<any>=new EventEmitter();
  constructor(){}
  ngOnInit(){}
  SendData(){
    this.ClickforMe.emit(this.ChildData);
  }

}
