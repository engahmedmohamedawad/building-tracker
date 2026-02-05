export interface AttendanceRecord {
  id: string;
  officerName: string;
  buildingEntry?: Date;
  buildingExit?: Date;
  missionExit?: Date;
  missionReturn?: Date;
  date: Date;
}

export enum ActionType {
  BUILDING_ENTRY = 'Building Entry',
  BUILDING_EXIT = 'Building Exit',
  MISSION_EXIT = 'Mission Exit',
  MISSION_RETURN = 'Mission Return'
}
