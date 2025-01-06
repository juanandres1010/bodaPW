import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "frame-component1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./FrameComponent1.component.html",
  styleUrls: ["./FrameComponent1.component.css"],
})
export class FrameComponent1 {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
