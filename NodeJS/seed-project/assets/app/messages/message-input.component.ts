import { Message } from './message.model';
import { Component } from '@angular/core';
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    providers: [MessageService]
})
export class MessageInputComponent {
    constructor(private messageService: MessageService){
    }

    onSave(value: string){
        const message = new Message(value, 'Tuha');
        this.messageService.addMessage(message);
    }
}