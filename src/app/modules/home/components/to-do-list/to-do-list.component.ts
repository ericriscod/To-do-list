import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../modal/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements DoCheck {
  ngDoCheck(): void {
    this.sortTaskList();
    this.setLocalStorage();
  }

  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('list') || '[]'
  );

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(): void {
    const confirm = window.confirm('Deseja apagar toda a lista?');

    if (confirm) {
      this.taskList = [];
    }
  }

  public addTaskList(event: string): void {
    this.taskList.push({ task: event, checked: false });
  }

  public validationInputEmpty(event: string, index: number): void {
    if (!event.length) {
      const confirm = window.confirm('Task está vaio, deseja excluir?');

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  private sortTaskList(): void {
    this.taskList = this.taskList.sort(
      (a, b) => Number(a.checked) - Number(b.checked)
    );
  }

  private setLocalStorage(): void {
    localStorage.setItem('list', JSON.stringify(this.taskList));
  }
}
