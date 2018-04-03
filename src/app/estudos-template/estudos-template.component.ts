import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-estudos-template',
  templateUrl: './estudos-template.component.html',
  styleUrls: ['./estudos-template.component.css']
})
export class EstudosTemplateComponent implements OnInit {

  loginText = 'Login';
  signUpText = 'Sign Up';
  lessons = ['Lesson 1', 'Lessons 2'];

  totalEstimate = 10;
  ctx = {estimate1: this.totalEstimate};

  @ViewChild('customTabButtons')
  private defaultTabButtonsTpl: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.defaultTabButtonsTpl);
  }


  login() {
      console.log('Login');
  }

  signUp() {
      console.log('Sign Up');
  }

}
