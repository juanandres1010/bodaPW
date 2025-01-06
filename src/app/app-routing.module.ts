import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AndroidMedium } from "./pages/AndroidMedium/AndroidMedium.component";
const routes: Routes = [
  {
    path: "",
    component: AndroidMedium,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
