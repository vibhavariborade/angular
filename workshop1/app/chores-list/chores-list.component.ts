import { Component } from '@angular/core';

@Component({
  selector: 'app-chores-list',
  templateUrl: './chores-list.component.html',
  styleUrls: ['./chores-list.component.scss']
})
export class ChoresListComponent  {

  choresList:string[]=['Empty dishwasher','Complete lunchcode prep work','Buy groceries',"another grocery","Cloth washing"]
  finishedChores:string[]=[]

  onSelect(chore:string):void{
    this.finishedChores.push(chore)
    this. choresList = this.choresList.filter(e=>e!=chore)
  }
  yesterdayChoresList:string[]=['Empty dishwasher','Complete lunchcode prep work','Buy groceries',"another grocery","Cloth washing"]
 
   todayChoresList:string[]=['Load dishwasher','Complete lunchcode prep work','Buy groceries you forgot']
   tomorrowChoresList:string[]=['Empty dishwasher again','Play with lunchcode practice code','Groceries again']
  
}
