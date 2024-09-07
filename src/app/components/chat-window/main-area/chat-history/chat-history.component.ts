import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Message } from '../../../models/message.model';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrl: './chat-history.component.css'
})
export class ChatHistoryComponent {
  @Input() user: User | undefined
  @Input() messageList: Message[] | undefined

  profilePicUrl = "http://localhost:8000/static/images/"

  getProfilePicURL = (user: User | undefined) => {
    return this.profilePicUrl + (user?user.profile_pic:"")
  }
}
