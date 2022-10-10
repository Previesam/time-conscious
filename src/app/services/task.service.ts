import { Injectable } from '@angular/core';

export interface Task {
  id: string | null;
  title: string | null;
  details: string | null;
  done: boolean;
  deleted: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    console.log('Fetched tasks from local storage');
  }

  tasks: Task[] = [];

  getActiveTasks() {
    return this.tasks.filter((i) => !i.deleted);
  }

  addTask(task: Task) {
    return new Promise((res, rej) => {
      try {
        this.tasks = [...this.tasks, task];
        this.saveToLocalStorage();
        res(null);
      } catch (err) {
        rej(err);
      }
    });
  }

  updateTask(task: Task) {
    return new Promise((res, rej) => {
      try {
        let idx = this.tasks.findIndex((i) => i.id === task.id);
        let editedTask = {
          ...this.tasks[idx],
          title: task.title,
          details: task.details,
        };
        this.tasks[idx] = editedTask;
        this.saveToLocalStorage();
        res(null);
      } catch (err) {
        rej(err);
      }
    });
  }

  toggleTaskDone(id: string) {
    let idx = this.tasks.findIndex((i) => i.id === id);
    let editedTask = { ...this.tasks[idx], done: !this.tasks[idx].done };
    this.tasks[idx] = editedTask;
    this.saveToLocalStorage();
  }

  deleteTask(id: string) {
    let idx = this.tasks.findIndex((i) => i.id === id);
    let editedTask = { ...this.tasks[idx], deleted: true };
    this.tasks[idx] = editedTask;
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
