import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { FrameComponent } from "../../components/FrameComponent/FrameComponent.component";
import { RSVP } from "../../components/RSVP/RSVP.component";
import { FrameComponent1 } from "../../components/FrameComponent1/FrameComponent1.component";
import { FrameComponent2 } from "../../components/FrameComponent2/FrameComponent2.component";
@Component({
  selector: "android-medium",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [FrameComponent, RSVP, FrameComponent1, FrameComponent2],
  templateUrl: "./AndroidMedium.component.html",
  styleUrls: ["./AndroidMedium.component.css"],
})
export class AndroidMedium {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
