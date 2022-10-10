import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { Meeting, MeetingService } from '../services/meeting.service';

const MEETING_DEFAULTS = {
  id: '',
  title: '',
  details: '',
  dateTime: new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  ).toISOString(),
  recurring: false,
  recurrentData: {
    every: '',
    on: '',
    until: '',
  },
  done: false,
  deleted: false,
};

@Component({
  selector: 'app-meeting',
  templateUrl: 'meeting.page.html',
  styleUrls: ['meeting.page.scss'],
})
export class MeetingPage {
  constructor(public meetingService: MeetingService) {}

  @ViewChild(IonModal) modal: IonModal;

  meeting: Meeting = MEETING_DEFAULTS;

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.clearMeetingForm();
  }

  confirm() {
    this.modal.dismiss(this.meeting, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.saveMeeting();
    }
  }

  async saveMeeting() {
    try {
      if (!this.meeting.id) {
        await this.meetingService.addMeeting({
          ...this.meeting,
          id: (this.meetingService.meetings.length + 1).toString(),
        });
      } else {
        await this.meetingService.updateMeeting(this.meeting);
      }
      this.clearMeetingForm();
    } catch (err) {
      console.log(err);
    }
  }

  editMeeting(meeting: Meeting) {
    this.meeting = { ...meeting };
    this.modal.isOpen = false;
    this.modal.isOpen = true;
  }

  toggleMeetingDone(id: string) {
    this.meetingService.toggleMeetingDone(id);
  }

  deleteMeeting(id: string) {
    this.meetingService.deleteMeeting(id);
  }

  clearMeetingForm() {
    for (let field in MEETING_DEFAULTS) {
      if (['title', 'details', 'id'].includes(field)) {
        this.meeting[field] = null;
      } else if (typeof MEETING_DEFAULTS[field] === 'object') {
        for (let subField in MEETING_DEFAULTS[field]) {
          if (['every', 'on', 'until'].includes(subField)) {
            this.meeting[field][subField] = null;
          } else {
            this.meeting[field][subField] = MEETING_DEFAULTS[field][subField];
          }
        }
      } else {
        this.meeting[field] = MEETING_DEFAULTS[field];
      }
    }
  }

  getCurrentDateTime() {
    return new Date(
      new Date().getTime() - new Date().getTimezoneOffset() * 60000
    ).toISOString();
  }

  ngOnInit() {
    setInterval(() => {
      this.meeting.dateTime = this.getCurrentDateTime();
    }, 20000);
    console.log('initialized');
  }
}
