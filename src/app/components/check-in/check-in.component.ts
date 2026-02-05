import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttendanceService } from '../../services/attendance.service';
import { ActionType } from '../../models/attendance.model';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent {
  officerName: string = '';
  selectedAction: ActionType | null = null;
  showSuccess: boolean = false;
  ActionType = ActionType;

  actions = [
    { type: ActionType.BUILDING_ENTRY, icon: '🏢', color: '#4CAF50', label: 'Enter Building' },
    { type: ActionType.BUILDING_EXIT, icon: '🚪', color: '#FF9800', label: 'Exit Building' },
    { type: ActionType.MISSION_EXIT, icon: '🚗', color: '#2196F3', label: 'Mission Exit' },
    { type: ActionType.MISSION_RETURN, icon: '↩️', color: '#9C27B0', label: 'Mission Return' }
  ];

  constructor(private attendanceService: AttendanceService) {}

  selectAction(actionType: ActionType): void {
    this.selectedAction = actionType;
  }

  submitAction(): void {
    if (this.officerName.trim() && this.selectedAction) {
      this.attendanceService.recordAction(this.officerName.trim(), this.selectedAction);
      this.showSuccess = true;
      
      setTimeout(() => {
        this.showSuccess = false;
        this.officerName = '';
        this.selectedAction = null;
      }, 2000);
    }
  }

  getActionColor(actionType: ActionType): string {
    const action = this.actions.find(a => a.type === actionType);
    return action?.color || '#000';
  }
}
