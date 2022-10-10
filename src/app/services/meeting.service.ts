import { Injectable } from '@angular/core';

export interface Meeting {
  id: string | null;
  title: string | null;
  details: string | null;
  dateTime: string | null;
  recurring: boolean;
  recurrentData: {
    every: string | null;
    on: string | null;
    until: string | null;
  } | null;
  done: boolean;
  deleted: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MeetingService {
  constructor() {
    this.meetings = JSON.parse(localStorage.getItem('meetings') || '[]');
    console.log('Fetched meetings from local storage');
  }

  meetings: Meeting[] = [];

  getActiveMeetings() {
    return this.meetings.filter((i) => !i.deleted);
  }

  addMeeting(meeting: Meeting) {
    return new Promise((res, rej) => {
      try {
        this.meetings = [...this.meetings, meeting];
        this.saveToLocalStorage();
        res(null);
      } catch (err) {
        rej(err);
      }
    });
  }

  updateMeeting(meeting: Meeting) {
    return new Promise((res, rej) => {
      try {
        let idx = this.meetings.findIndex((i) => i.id === meeting.id);
        let editedMeeting = {
          ...this.meetings[idx],
          title: meeting.title,
          details: meeting.details,
          dateTime: meeting.dateTime,
          recurring: meeting.recurring,
          recurrentData: meeting.recurrentData,
        };
        this.meetings[idx] = editedMeeting;
        this.saveToLocalStorage();
        res(null);
      } catch (err) {
        rej(err);
      }
    });
  }

  toggleMeetingDone(id: string) {
    let idx = this.meetings.findIndex((i) => i.id === id);
    let editedMeeting = {
      ...this.meetings[idx],
      done: !this.meetings[idx].done,
    };
    this.meetings[idx] = editedMeeting;
    this.saveToLocalStorage();
  }

  deleteMeeting(id: string) {
    let idx = this.meetings.findIndex((i) => i.id === id);
    let editedMeeting = { ...this.meetings[idx], deleted: true };
    this.meetings[idx] = editedMeeting;
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('meetings', JSON.stringify(this.meetings));
  }
}
