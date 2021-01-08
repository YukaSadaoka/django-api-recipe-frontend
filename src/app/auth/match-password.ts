import { Injectable } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';


@Injectable({providedIn: 'root'})
export class MatchPassword implements Validators {
    validate(formGroup: FormGroup){
        const { password, confirmPassword } = formGroup.value;

        if(password === confirmPassword){
            return null;
        }else{
            return {
                pwDontMatch: true
            };
        }
    }
}
