import { Component, Input } from '@angular/core';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrl: './chat-header.component.css'
})
export class ChatHeaderComponent {
  @Input() user: User | undefined

  profilePicUrl = "http://localhost:8000/static/images/"

  getProfilePicURL = (profile_pic: string) => {
    return this.profilePicUrl + profile_pic
  }

}
