import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "frame-component2",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./FrameComponent2.component.html",
  styleUrls: ["./FrameComponent2.component.css"],
})
export class FrameComponent2 {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
