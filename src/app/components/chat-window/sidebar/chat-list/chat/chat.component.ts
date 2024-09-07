import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chat } from '../../../../models/chat.model';
import { SharedService } from '../../../../../services/shared.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  @Input()
  chat!: Chat;

  @Output() messageEvent = new EventEmitter<string>();

  profilePicUrl = "http://localhost:8000/static/images/"

  constructor(private sharedService: SharedService) {}


  getStrippedText = (text: string) => {
    return  text.substring(0, 30) + "..."
  }

  getProfilePicURL = (profile_pic: string) => {
    return this.profilePicUrl + profile_pic
  }

  openChat = () => {
    this.sharedService.changeMessage(this.chat.user._id)
  }
}
