import { LightningElement ,api,track} from 'lwc';

export default class ChildWebComponent extends LightningElement {
    @track value=100;
    @api ChangeHandler(){
        this.value=200;
    }
    renderedCallback(){
        console.log('this is coming from renderedCallback');
    }
    connectedCallback(){
        console.log('This is coming from connected call back');
    }
    constructor(){
        super();
        console.log('This is coming from constructor');
    }
}