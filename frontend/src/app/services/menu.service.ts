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
    const document = this.document.getElementsByTagName("html");
    const navItems = this.document.querySelectorAll(".menus li");
    const socialMediaIcons = this.document.querySelectorAll(".social-media a img")
    if (this.storage.getItem("dayMode") == "true") {
      if (document[0].classList.contains("night-theme")) {
        document[0].classList.remove("night-theme");
      }
      navItems.forEach((el) => {
        if (el.classList.contains("filter-white")) {
          el.classList.remove("filter-white");
        }
      });
      socialMediaIcons.forEach((el) => {
        if (el.classList.contains("filter-white")){
            el.classList.remove("filter-white")
        }
      })
    } else {
      document[0].classList.add("night-theme");
      navItems.forEach((el) => {
        el.classList.add("filter-white");
      });
      socialMediaIcons.forEach((el) => {
        el.classList.add("filter-white")
      })
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

/**
 *       mainSections.forEach((el) => {
        if (el.classList.contains("night-theme")) {
          el.classList.remove("night-theme");
        }
      });

            if (header!.classList.contains("night-theme")) {
        header!.classList.remove("night-theme");
      }
       mainSections.forEach((el) => {
        el.classList.add("night-theme");
      });
            header!.classList.add("night-theme");
 */
