

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private entriesSource = new BehaviorSubject<{ name: string; address: string }[]>([]);
  currentEntries = this.entriesSource.asObservable();


  updateEntries(entries: { name: string; address: string }[]) {
    this.entriesSource.next(entries);
  }
}