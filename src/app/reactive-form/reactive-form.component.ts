import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm: FormGroup;
  myForm2: FormGroup;
  myForm3: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    const phone  = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    })

    this.myForm = this.fb.group({
      email:'',
      homePhone: phone,
      cellPhone: phone,
      message: 'Default message'
    })

    this.myForm2 = this.fb.group({
      email:'',
      phones: this.fb.array([])
    })

    this.myForm3 = this.fb.group({

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      password: ['', [
        Validators.required,
        Validators.pattern('/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],

      age:[null, [
        Validators.required,
        Validators.minLength(2),
        Validators.min(18),
        Validators.max(65)
      ]]
    });


    //the valueChanges method returns an observable
    //when we subscribe to the observable, 
    //we emit the value of the for everytime it changes
    this.myForm.valueChanges.subscribe(console.log);

  }

  get phoneForms() {
    return this.myForm2.get('phones') as FormArray
  }
  
  addPhone(){

    const phone  = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    })

    this.phoneForms.push(phone);

  }

  deletePhone(i){
    this.phoneForms.removeAt(i);
  }

  get email(){
    return this.myForm3.get('email');
  }

  get password() {
    return this.myForm3.get('password');
  }

  get age(){
    return this.myForm3.get('age');
  }
  
}
