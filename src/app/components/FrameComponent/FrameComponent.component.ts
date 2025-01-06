import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Root } from "../Root/Root.component";
import { PortalPopup } from "../PortalPopup/PortalPopup.component";
import { Encendido } from "../Encendido/Encendido.component";
import { CommonModule } from "@angular/common";
@Component({
  selector: "frame-component",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, Root, PortalPopup, Encendido, CommonModule],
  templateUrl: "./FrameComponent.component.html",
  styleUrls: ["./FrameComponent.component.css"],
})
export class FrameComponent {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  isFrameOpen = false;

  openFrame() {
    this.isFrameOpen = true;
  }

  closeFrame() {
    this.isFrameOpen = false;
  }
}
