import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scss';

  @ViewChild('container') container: ElementRef;

  ngOnInit() {
    // const container = document.querySelector(".container");
    // const btn = document.querySelector("button");
    // const preferenceQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // const addDarkMode = () => {
    //   container.classList.remove("light-mode");
    //   container.classList.add("dark-mode");
    // };

    // const addLightMode = () => {
    //   container.classList.remove("dark-mode");
    //   container.classList.add("light-mode");
    // };

    // const toggleTheme = () =>
    //   !container.classList.contains("dark-mode") ? addDarkMode() : addLightMode();

    // const checkPreference = () =>
    //   preferenceQuery.matches ? addDarkMode() : addLightMode();

    // btn.addEventListener("click", toggleTheme);
    // this.preferenceQuery.addEventListener("change", checkPreference);
    // window.addEventListener("DOMContentLoaded", checkPreference);
    // (() => checkPreference())();

    setTimeout(() => this.addLightMode());
  }

  addDarkMode() {
    this.container.nativeElement.classList.remove("light-mode");
    this.container.nativeElement.classList.add("dark-mode");
  }

  addLightMode() {
    this.container.nativeElement.classList.remove("dark-mode");
    this.container.nativeElement.classList.add("light-mode");
  }

  toggleTheme() {
    !this.container.nativeElement.classList.contains("dark-mode") ? this.addDarkMode() : this.addLightMode();
  }

}
