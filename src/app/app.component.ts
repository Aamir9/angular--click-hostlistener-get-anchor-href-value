import { Component } from '@angular/core';
import { OnInit, ViewChild, AfterViewInit, ElementRef, Input, HostListener } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
   clicked: string = '';

 constructor(private elem: ElementRef) { }
  @HostListener('document:click', ['$event'])
    onclickAnchor(event) {
        
        if(event.target.matches('a')) {
            alert(event.target.attributes["href"].nodeValue);
        }

    }

  /*   @HostListener('document:mouseover', ['$event'])
    mouseover(event) {
        if(event.target.matches('.editor-div')) {
            alert('hover to editor div')
        }
    } */
}
