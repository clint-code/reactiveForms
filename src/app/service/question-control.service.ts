import { Injectable } from '@angular/core';

import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

import { QuestionBase } from '../models/question-base';

import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class QuestionControlService {

  fieldType: string = "";

  constructor(
    private http:HttpClient
  ) { }


  toFormGroup(questions : QuestionBase<string>[]){

		const group:any = {};

		questions.forEach( question => {

			group[question.key] = question.required ? new FormControl(question.value || '',Validators.required) : new FormControl(question.value || '');

		});

		return new FormGroup(group);

	}

  toFormGroupDynamic(questions : any){

		const dynamicGroup:any = {};

		for(let i = 0; i< questions.length; i++){

			dynamicGroup[questions[i].fieldName] = questions[i].required ? new FormControl( '',Validators.required) : new FormControl('');

		}

		return new FormGroup(dynamicGroup);

	}

  toFormGroupDynamic2(pages : any){

    const dynamicGroup:any = {};
    
    
		for(let j = 0; j < pages.length; j++){

			let pageName = pages[j]["pageName"];

			dynamicGroup[ pageName ] =  new FormGroup({});

      for(let i = 0; i< pages[j].questions.length; i++){

				this.fieldType = pages[j].questions[i].fieldType;

				let questionFieldName = pages[j].questions[i].fieldName;

        if(this.fieldType === 'repeater'){

					dynamicGroup[ pageName ]["controls"][ questionFieldName ] = new FormArray([]);

          /**
					 1. Create a dynamic Object
					 2. Loop in the options and assign the options in the questions to follow
					 3. From the options, set the form controls
					 4. Return the dynamic object as a FormGroup()
					 */

					let optionResponse = this.createDynamicRepeaterFields(pages[j].questions[i].options[0]["questionToFollow"]);

					dynamicGroup[ pageName ]["controls"][ questionFieldName ].controls.push(new FormGroup(optionResponse) );

        } else if(this.fieldType === 'accordion'){

          dynamicGroup[ pageName ]["controls"][ questionFieldName ] = new FormGroup({});
         
          /**
					 * 1. Check that the fieldType is accordion
					 * 2. Create form group after traversing to the question fieldname
					 * 3. Within this object is the options array
					 * 4. Loop in the options
					 * 5. Have another for loop for the questionsToFollow array
					 * 6. Assign a formGroup for the questionsToFollow array
					 * 7. Do a loop in the questionToFollow array
					 * 8. Assign a formControl after traversing to the questionToFollow array
					 *
					 */

           for(let k = 0; k < pages[j].questions[i].options.length; k++ ){

            let accordionTitle = pages[j].questions[i].options[k]["value"];

            dynamicGroup[ pageName ]["controls"][ questionFieldName ]["controls"][ accordionTitle ] = new FormGroup({});

            for (let p=0; p < pages[j].questions[i].options[k].questionToFollow.length; p++){

							let accordionQuestion = pages[j].questions[i].options[k].questionToFollow[p].fieldName;

							dynamicGroup[ pageName ]["controls"][ questionFieldName ]["controls"][ accordionTitle ]["controls"][accordionQuestion] = new FormControl();

						}
            
           }

        } else {

          dynamicGroup[ pageName ]["controls"][ questionFieldName ] = pages[j].questions[i].required ? new FormControl( '',Validators.required) : new FormControl('');

        }

      }

    }

    return new FormGroup(dynamicGroup);

  }

  createDynamicRepeaterFields(options: any){

    const dynamicObject: any = {};

    for(let i = 0; i< options.length; i++){

      dynamicObject[ options[i].fieldName ] = new FormControl(' ');

    }

    return dynamicObject;

  }

  

}
