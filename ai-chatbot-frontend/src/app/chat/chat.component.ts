import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../service/chat.service';

@Component({    
  selector: 'app-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  messages: string[] = [];
  userInput: string = '';

  constructor(private chatService: ChatService) {}

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push("You: " + this.userInput);
      this.messages.push("Bot: (waiting for AI...)");

      // Send the message using the services and get the reply
      this.chatService.sendMessageToBot(this.userInput).subscribe((response: any) => {
        this.messages[this.messages.length - 1] = "Bot: " + response.reply;
      });

      // Clear the input field
      this.userInput = '';
    }
  }
}
