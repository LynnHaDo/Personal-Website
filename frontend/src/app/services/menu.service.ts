import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  isDayToggle: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  storage: Storage = sessionStorage;
  constructor(@Inject(DOCUMENT) private document: Document) {}

  changeNightDayTheme() {
    const mainSections = this.document.querySelectorAll(".main-section");
    const header = this.document.getElementById("header-wrapper");
    const navItems = this.document.querySelectorAll(".menus li");
    if (this.storage.getItem("dayMode") == "true") {
      mainSections.forEach((el) => {
        if (el.classList.contains("night-theme")) {
          el.classList.remove("night-theme");
        }
      });
      navItems.forEach((el) => {
        if (el.classList.contains("filter-white")) {
          el.classList.remove("filter-white");
        }
      });
      if (header!.classList.contains("night-theme")) {
        header!.classList.remove("night-theme");
      }
    } else {
      mainSections.forEach((el) => {
        el.classList.add("night-theme");
      });
      navItems.forEach((el) => {
        el.classList.add("filter-white");
      });
      header!.classList.add("night-theme");
    }
  }

  toggleNightDayState() {
    if (this.storage.getItem("dayMode") == "true") {
      this.storage.setItem("dayMode", "false");
      this.isDayToggle.next(false);
    } else {
      this.storage.setItem("dayMode", "true");
      this.isDayToggle.next(true);
    }
  }
}
