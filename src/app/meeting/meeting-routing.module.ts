import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingPage } from './meeting.page';

const routes: Routes = [
  {
    path: '',
    component: MeetingPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingPageRoutingModule {}
