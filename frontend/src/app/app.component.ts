import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  storage: Storage = sessionStorage;
  constructor(@Inject(DOCUMENT) document: Document, private menuService: MenuService){}
  
  ngOnInit(): void {
    if (this.storage.getItem("dayMode") == null){
        this.storage.setItem("dayMode", "true")
    } 
    document.addEventListener("DOMContentLoaded", ()=> {
        this.menuService.changeNightDayTheme();
    })
  }
}
