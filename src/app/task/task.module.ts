import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskPage } from './task.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TaskPageRoutingModule } from './task-routing.module';
import { TaskService } from '../services/task.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TaskPageRoutingModule
  ],
  declarations: [TaskPage],
  providers: [TaskService]
})
export class TaskPageModule {}
