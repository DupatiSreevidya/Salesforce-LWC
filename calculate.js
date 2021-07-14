import { LightningElement,track } from 'lwc';

export default class Calculate extends LightningElement {
    firstValue;
    secondValue;
    @track result;
    dataHandler(event){
        var input=event.target.name;
        if(input === "firstvalue"){
            this.firstValue=event.target.value;
        }
        else{
            this.secondValue=event.target.value; 
        }
    };
    addHandler(){
        var input1=this.firstValue;
        var input2=this.secondValue;
        this.result=parseInt(input1)+parseInt(input2);
    }
    subHandler(){
        var input1=this.firstValue;
        var input2=this.secondValue;
        this.result=parseInt(input1)-parseInt(input2);
    }
    mulHandler(){
        var input1=this.firstValue;
        var input2=this.secondValue;
        this.result=parseInt(input1)*parseInt(input2);
    }
    divHandler(){
        var input1=this.firstValue;
        var input2=this.secondValue;
        this.result=parseInt(input1)/parseInt(input2);
    }
}