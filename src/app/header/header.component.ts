import { Component, OnInit } from '@angular/core';
import {Constant} from '../constant';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  labels = Constant.en;
  lang = 'en';
  constructor() { }

  ngOnInit() {
  }
  changeLanguage(lang) {
    console.log(this.lang)
    this.labels = Constant[this.lang]
  }

}
