import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    isDayToggle!: boolean;
    storage: Storage = sessionStorage;

    constructor(@Inject(DOCUMENT) private document: Document, public menuService: MenuService){}

    ngOnInit(): void {
        this.isDayToggle = this.menuService.isDayToggle.getValue();   
    }

    handleNightDayClick(){
        this.menuService.toggleNightDayState();
        this.menuService.changeNightDayTheme();
        this.isDayToggle = this.menuService.isDayToggle.getValue();   
    }

}
