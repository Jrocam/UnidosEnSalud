import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'qs-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
})
export class TemplatesComponent implements AfterViewInit {

  ngAfterViewInit () {
    !function(d,s,id){
      let js: any,
        fjs=d.getElementsByTagName(s)[0],
        p='https';
      if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;
        js.src=p+"://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js,fjs);
      }
    }(document,"script","twitter-wjs");
  }
}
