import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'volcani-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openSideBar() {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("menu");
    const main = document.querySelector(".main");


    // Sidebar Menu Toggle
    if (burger !== null) {
      burger.addEventListener("click", function () {
        burger.classList.toggle("active");
        menu!.classList.toggle("active");
      });
    }

    if (main !== null) {
      // Close Sidebar by Click Outside
      main.addEventListener("click", function () {
        if (menu!.classList.contains("active")) {
          burger!.classList.remove("active");
          menu!.classList.remove("active");
        }
      });
    }

    // Close Sidebar by Press Escape(ESC)
    window.addEventListener("keyup", function (e) {
      if (e.key == "Escape" && menu!.classList.contains("active")) {
        burger!.classList.remove("active");
        menu!.classList.remove("active");
      }
    });
  }

}
