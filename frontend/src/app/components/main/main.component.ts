import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    constructor(@Inject(DOCUMENT) public document: Document){};
    ngOnInit(): void {
        document.addEventListener('DOMContentLoaded', function() {
            var currentDate = new Date().toLocaleString().split(",")[0]
            document.getElementById('currentDate')!.textContent = currentDate;
        });
    }
}
