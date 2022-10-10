import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { Task, TaskService } from '../services/task.service';

const TASK_DEFAULT = {
  id: '',
  title: '',
  details: '',
  done: false,
  deleted: false,
};

@Component({
  selector: 'app-task',
  templateUrl: 'task.page.html',
  styleUrls: ['task.page.scss'],
})
export class TaskPage {
  constructor(public taskService: TaskService) {}

  @ViewChild(IonModal) modal: IonModal;

  task: Task = TASK_DEFAULT;

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.clearTaskForm();
  }

  confirm() {
    this.modal.dismiss(this.task, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.saveTask();
    }
  }

  async saveTask() {
    try {
      if (!this.task.id) {
        await this.taskService.addTask({
          ...this.task,
          id: (this.taskService.tasks.length + 1).toString(),
        });
      } else {
        await this.taskService.updateTask(this.task);
      }
      this.clearTaskForm();
    } catch (err) {
      console.log(err);
    }
  }

  editTask(task: Task) {
    this.task = { ...task };
    this.modal.isOpen = false;
    this.modal.isOpen = true;
  }

  toggleTaskDone(id: string) {
    this.taskService.toggleTaskDone(id);
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id);
  }

  clearTaskForm() {
    for (let field in TASK_DEFAULT) {
      if (field === 'title' || field === 'details' || field === 'id') {
        this.task[field] = null;
      } else {
        this.task[field] = TASK_DEFAULT[field];
      }
    }
  }

  ngOnInit() {
    console.log('initialized');
  }
}
