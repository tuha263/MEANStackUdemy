import { NgForm } from '@angular/forms';
import { Message } from './message.model';
import { Component } from '@angular/core';
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent {
    constructor(private messageService: MessageService){
    }

    onSubmit(form: NgForm){
        const message = new Message(form.value.content, 'Tuha');
        this.messageService.addMessage(message);
        form.resetForm();
    }
}