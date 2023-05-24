import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommunicatorComponent} from "./communicator.component";

const routes: Routes = [
  {path: '', component: CommunicatorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicatorRoutingModule {
}
