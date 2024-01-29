import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    isDayToggle!: boolean;
    storage: Storage = sessionStorage;

    constructor(@Inject(DOCUMENT) public document: Document, private menuService: MenuService){};
    ngOnInit(): void {
        document.addEventListener('DOMContentLoaded', function() {
            var currentDate = new Date().toLocaleString().split(",")[0]
            document.getElementById('currentDate')!.textContent = currentDate;
        });
        this.isDayToggle = this.storage.getItem("dayMode") == "true"? true:false;   
        var radioButtons = this.document.getElementsByName("theme");
        if (this.isDayToggle){
            radioButtons[0].setAttribute("checked", "true");
        } else {
            radioButtons[1].setAttribute("checked", "true");
        }
        this.menuService.changeNightDayTheme();
    }

    handleNightDayClick(e: any){
        this.menuService.toggleNightDayState();
        this.menuService.changeNightDayTheme();
        this.isDayToggle = this.menuService.isDayToggle.getValue();  
    }
}
