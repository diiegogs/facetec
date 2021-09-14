import { Component, OnInit } from "@angular/core";
import { AngularSampleApp } from "../assets/angular-sample-controller";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})


export class AppComponent implements OnInit {
  title: any;
  constructor() {}
  access:String ="Access";
  ngOnInit(): void {

  }

  // Perform Liveness Check.
  onLivenessCheckPressed() {
    AngularSampleApp.onLivenessCheckPressed();
  }

}
