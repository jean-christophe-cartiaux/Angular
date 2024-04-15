import { Injectable } from '@angular/core';

export interface ITask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _tasks: ITask[] = [];

  constructor() { }

  getTasks(): ITask[] {
    return this._tasks;
  }

  addTask(task: ITask): void {
    this._tasks.push(task);
  }

  removeTask(id: string): void {
     this._tasks = this._tasks.filter(task => task.id !== id)
  }

  completeTask(id: string){
    this._tasks = this._tasks.map((task: ITask) => {
      if (task.id === id) {
        return{...task, completed: true}
      }
      return task
    })
  }
}
