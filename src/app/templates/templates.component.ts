import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';


@Component({
  selector: 'qs-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
})
export class TemplatesComponent implements AfterViewInit, OnDestroy {
  private sub: any;
  constructor(private _router : Router) { }

  ngAfterViewInit() {
    this.sub = this._router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        (<any>window).twttr = (function (d, s, id) {
          let js: any, fjs = d.getElementsByTagName(s)[0],
            t = (<any>window).twttr || {};
          if (d.getElementById(id)) return t;
          js = d.createElement(s);
          js.id = id;
          js.src = "https://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js, fjs);

          t._e = [];
          t.ready = function (f: any) {
            t._e.push(f);
          };

          return t;
        }(document, "script", "twitter-wjs"));

        if ((<any>window).twttr.ready())
          (<any>window).twttr.widgets.load();

      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
