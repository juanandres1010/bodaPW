import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "rsvp",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./RSVP.component.html",
  styleUrls: ["./RSVP.component.css"],
})
export class RSVP {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  onRSVPButtonIconClick() {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfT7t50vHxlIGrfDAHTd2nwFgxwewGAtDvH7xgc4XEZmNy26w/viewform?usp=dialog"
    );
  }
}
