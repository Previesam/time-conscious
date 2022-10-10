import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'task',
        loadChildren: () =>
          import('../task/task.module').then((m) => m.TaskPageModule),
      },
      {
        path: 'meeting',
        loadChildren: () =>
          import('../meeting/meeting.module').then((m) => m.MeetingPageModule),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../account/account.module').then((m) => m.AccountPageModule),
      },
      {
        path: '',
        redirectTo: 'task',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'task',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
