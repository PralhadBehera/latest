import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
 constructor(private dataService : DataService){}
 entries:{name:string, address:string}[]=[];
 ngOnInit():void{
  this.dataService.currentEntries.subscribe((entries)=>{
    this.entries=entries;
  })
}
}
