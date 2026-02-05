import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AttendanceRecord, ActionType } from '../models/attendance.model';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private records: AttendanceRecord[] = [];
  private recordsSubject = new BehaviorSubject<AttendanceRecord[]>([]);

  constructor() {
    // Load from localStorage if available
    const savedRecords = localStorage.getItem('attendanceRecords');
    if (savedRecords) {
      this.records = JSON.parse(savedRecords, (key, value) => {
        if (key.includes('ate') || key === 'date') {
          return value ? new Date(value) : undefined;
        }
        return value;
      });
      this.recordsSubject.next(this.records);
    }
  }

  getRecords(): Observable<AttendanceRecord[]> {
    return this.recordsSubject.asObservable();
  }

  recordAction(officerName: string, actionType: ActionType): void {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Find existing record for today
    let record = this.records.find(
      r => r.officerName.toLowerCase() === officerName.toLowerCase() && 
      this.isSameDay(r.date, today)
    );

    if (!record) {
      record = {
        id: this.generateId(),
        officerName,
        date: today
      };
      this.records.push(record);
    }

    // Update the appropriate field
    const now = new Date();
    switch (actionType) {
      case ActionType.BUILDING_ENTRY:
        record.buildingEntry = now;
        break;
      case ActionType.BUILDING_EXIT:
        record.buildingExit = now;
        break;
      case ActionType.MISSION_EXIT:
        record.missionExit = now;
        break;
      case ActionType.MISSION_RETURN:
        record.missionReturn = now;
        break;
    }

    this.saveRecords();
  }

  private isSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }

  private generateId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }

  private saveRecords(): void {
    localStorage.setItem('attendanceRecords', JSON.stringify(this.records));
    this.recordsSubject.next([...this.records]);
  }

  clearAllRecords(): void {
    this.records = [];
    localStorage.removeItem('attendanceRecords');
    this.recordsSubject.next([]);
  }
}
