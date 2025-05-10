import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'http://localhost:3000/api/message';

  constructor(private http: HttpClient) { }

  // Function to send message to the backend and get a response
  sendMessageToBot(userMessage: string): Observable<any> {
    return this.http.post(this.apiUrl, { message: userMessage });
  }

}
