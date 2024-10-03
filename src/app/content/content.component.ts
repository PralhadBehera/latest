

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FormsModule,  CommonModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  name: string = "";
  address: string = "";
  entries: { name: string, address: string }[] = [];
  editMode: boolean = false;
 currentIndex: number | null = null ;
 constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.dataService.currentEntries.subscribe((entries) => {
      this.entries = entries;
    });
  }

  onSubmit() {
    if (this.name && this.address) {
      if(this.editMode && this.currentIndex !== null){
        this.entries[this.currentIndex].name = this.name;
        this.entries[this.currentIndex].address = this.address;
        this.editMode = false;
        this.currentIndex = null;
        this.name = "";
      this.address = "";
      return;
      }
      this.editMode = false;
      this.currentIndex = null;
      console.log(this.name);
      console.log(this.address)
      this.entries.push({ name: this.name, address: this.address });
      this.name = "";
      this.address = "";
    }
  }
deleteEntry(index:number){
this.entries.splice(index,1)
}

editEntry(index:number){
  console.log(index);

  this.editMode=true;
  this.currentIndex=index
  this.name=this.entries[index].name;
  this.address=this.entries[index].address;
}
  

}
