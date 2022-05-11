import { AbstractControl } from "@angular/forms";

export function emailValidator(control: AbstractControl){
    const emailRegEx = /^(?!.*([.])\1{1})([\w\.\-\+\<\>\{\}\=\`\|\?]+)@(?![.-])([a-zA-Z\d.-]+)\.([a-zA-Z.][a-zA-Z]{1,6})$/;
    if(control.value && !emailRegEx.test(control.value)) {
        return {invalidEmail: true};
    }
    return null;
}