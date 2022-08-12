import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      email:'',
      message: 'Default message'
    })

    //the valueChanges method returns an observable
    //when we subscribe to the observable, we emit the value of the form
    //everytime it changes
    this.myForm.valueChanges.subscribe(console.log);

  }

}
