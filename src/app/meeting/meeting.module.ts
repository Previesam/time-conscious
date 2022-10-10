import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MeetingPage } from './meeting.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MeetingPageRoutingModule } from './meeting-routing.module';
import { MeetingService } from '../services/meeting.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MeetingPageRoutingModule,
  ],
  declarations: [MeetingPage],
  providers: [MeetingService],
})
export class MeetingPageModule {}
