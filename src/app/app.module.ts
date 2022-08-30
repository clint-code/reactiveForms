import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

//material imports
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { ObjecttraverseComponent } from './objecttraverse/objecttraverse.component';

//import { AngularFireModule } from '@angular/fire';
//import { initializeApp } from "firebase/app";
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';

// const firebaseConfig = {

//   apiKey: "AIzaSyBV72o6a1KL2YN7tLN_gLs7ENG7cobcH08",
//   authDomain: "demos-d499a.firebaseapp.com",
//   projectId: "demos-d499a",
//   storageBucket: "demos-d499a.appspot.com",
//   messagingSenderId: "782370679110",
//   appId: "1:782370679110:web:2d3caa9177ba570e3b5d47",
//   measurementId: "G-3QZ4F9Q451"

// };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    ObjecttraverseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
