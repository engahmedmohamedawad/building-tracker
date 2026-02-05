import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckInComponent } from './components/check-in/check-in.component';
import { RecordsComponent } from './components/records/records.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CheckInComponent, RecordsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentView: 'check-in' | 'records' = 'check-in';

  switchView(view: 'check-in' | 'records'): void {
    this.currentView = view;
  }
}
