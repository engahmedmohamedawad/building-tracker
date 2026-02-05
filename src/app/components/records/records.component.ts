import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceService } from '../../services/attendance.service';
import { AttendanceRecord } from '../../models/attendance.model';

@Component({
  selector: 'app-records',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  records: AttendanceRecord[] = [];

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit(): void {
    this.attendanceService.getRecords().subscribe(records => {
      this.records = records.sort((a, b) => b.date.getTime() - a.date.getTime());
    });
  }

  formatTime(date: Date | undefined): string {
    if (!date) return '-';
    return new Date(date).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  clearAllRecords(): void {
    if (confirm('Are you sure you want to clear all records?')) {
      this.attendanceService.clearAllRecords();
    }
  }
}
