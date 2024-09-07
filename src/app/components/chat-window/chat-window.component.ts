import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { RESTService } from '../../app.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent {
  user: User | undefined = undefined

  constructor(private httpService: RESTService) { }

  ngOnInit() {
    this.httpService.getData("users/2a2edf8c-df33-4649-9307-d485186176eb").subscribe(data=>{
      this.user = data
    })
  }
}
