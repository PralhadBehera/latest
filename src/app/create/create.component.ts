import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  name: string = '';
  address: string = '';
  entries: { name: string; address: string }[] = [];

  constructor(private dataService: DataService) {}

  onSubmit() {
    if (this.name && this.address) {
      // Add entry to the entries array
      this.entries.push({ name: this.name, address: this.address });

      // Update the shared service with the new entries
      this.dataService.updateEntries(this.entries);

      // Clear form fields
      this.name = '';
      this.address = '';
    }
  }
}