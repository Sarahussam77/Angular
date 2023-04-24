import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styles: []
})
export class UserTableComponent {

  // ngOnChanges(changes: SimpleChanges): void {

  //   if(this.studentFromParent){
  //     this.studentsFromParent.push(this.studentFromParent);//[undefined]
  //   }

  // }


  studentsFromParent:{name:string, age:number,email:string}[] = [
    { name: "sara", age: 24, email: "sara@gmail.com" },
    { name: "salma", age: 28, email: "salma@gmail.com" },
    { name: "sondos", age: 25, email: "sondos@gmail.com" },
    { name: "ethar", age: 24, email: "ethar@gmail.com" },
  ]

}
