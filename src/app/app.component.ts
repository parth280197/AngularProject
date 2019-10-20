import {Component} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currentPage = "recipes";
  title = "Project";
  onTabChange = (navigationLink: string) => {
    if (navigationLink == "recipes") {
      this.currentPage = "recipes";
    } else if (navigationLink == "shopping list") {
      this.currentPage = "shopping list";
    }
  };
}
