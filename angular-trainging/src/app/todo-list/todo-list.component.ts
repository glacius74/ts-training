import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent{
  public todos: any = this.getLocalStorage()
  public todo: string = ''

  private setToLocalStorage(arr: any[]){
    const jsonData = JSON.stringify(arr)
    localStorage.setItem('localTodos', jsonData)
  }

  private getLocalStorage(){
    const temp: string[] = []   
    return JSON.parse(localStorage.getItem('localTodos') || '{}');
  }

  public addToList(){
    if(this.todo != ''){
      this.todos.push(this.todo)
      this.todo = ''
      this.setToLocalStorage(this.todos)
      console.log(this.getLocalStorage())
    }
  }

  public deleteTodo(index: any){
    this.todos.splice(index, 1)
    this.setToLocalStorage(this.todos)
  }
}
