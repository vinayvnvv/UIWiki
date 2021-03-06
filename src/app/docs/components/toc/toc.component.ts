import { Component, OnInit } from '@angular/core';
import { TOC } from './../../../toc/toc.component';
import { environment }  from './../../../../environments/environment';
@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.css']
})
export class TocDocComponent implements OnInit {

  public tab:any = "example";
  public toc_list: Array<TOC> = [];
  constructor() { }

  ngOnInit() {
    this.addListToToc();
  }

  addListToToc() {
    let toc_sub_list: Array<TOC> = [];
    this.toc_list.push(new TOC("Basic", "toc_basic", null));

    this.toc_list.push(new TOC("Right Bordered (inverted)", "toc_right_bordered", null));

    this.toc_list.push(new TOC("Inlined", "toc_inlined", null));



  }
}
