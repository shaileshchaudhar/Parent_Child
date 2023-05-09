import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchild';
  ReceiveDataString:any=''
  Senddata:string="I am Parent Component"
  
  
  ReceivedData(event:any){
    this.ReceiveDataString=event
    console.log(event);

    
  }
}
