import {Component, OnInit} from '@angular/core';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {EmailService} from '../services/email/email.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public name;
  public email;
  public subject;
  public message;
  public subscribe;

  constructor(private emailService: EmailService) {}

  ngOnInit() {
  }

  public sendEmail() {
    this.emailService.sendEmail(this.name, this.email, this.subject, this.message, this.subscribe).then((data) => {

    }).catch((error) => {

    });  
  }

}
