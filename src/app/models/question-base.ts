//A dynamic form requires an object model that can describe all scenarios needed by the form functionality.
//This is a base class for a set of controls that can represent the question and its answer in the form
export class QuestionBase<T> {

	value: T|undefined;
	key: string;
	label: string;
	required: boolean;
	order: number;
	fieldName:string;
	fieldType:string;
	controlType: string;
	type: string;
	questionText: string;
	options: {key: string, value: string}[];

	constructor(options: {

		value?: T;
		key?: string;
		label?: string;
		required?: boolean;
		fieldName?:string;
		fieldType?:string;
		order?: number;
		controlType?: string;
		type?: string;
		questionText?: string;
		options?: {key: string, value: string}[];

	} = {}) {

		this.value = options.value;
		this.key = options.key || '';
		this.label = options.label || '';
		this.fieldName = options.fieldName;
		this.fieldType = options.fieldType;
		this.required = !!options.required;
		this.order = options.order === undefined ? 1 : options.order;
		this.controlType = options.controlType || '';
		this.type = options.type || '';
		this.options = options.options || [];
		this.questionText = options.questionText;

	}


}
