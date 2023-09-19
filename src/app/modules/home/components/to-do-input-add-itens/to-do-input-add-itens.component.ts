import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-input-add-itens',
  templateUrl: './to-do-input-add-itens.component.html',
  styleUrls: ['./to-do-input-add-itens.component.css'],
})
export class ToDoInputAddItensComponent {
  @Output() outputTask = new EventEmitter();

  public task: string = '';

  public submitTask(): void {
    this.task = this.task.trimStart().trimEnd();
    if (this.task) {
      this.outputTask.emit(this.task);
      this.task = '';
    }
  }
}
