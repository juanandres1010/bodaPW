import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "encendido",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Encendido.component.html",
  styleUrls: ["./Encendido.component.css"],
})
export class Encendido {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Variant props */
  @Input() property1: string = "Default";

  onMapIconClick() {
    window.open("https://maps.app.goo.gl/ZEktUEKNpq7Zag5dA");
  }
}
