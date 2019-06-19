import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from "./forgot-password.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from "../../shared/custom-validator.class";

@Component({
    selector: 'forgot',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})
export class ForgotComponent implements OnInit {

    forgotForm: FormGroup;
    alert: boolean = false;
    message;
    loading: boolean = false;
    successAlert: boolean = false;
    successMessage;

    constructor(
        private _fps: ForgotPasswordService,
        private fb: FormBuilder
    ) {
    }
    ngOnInit() {
        this.forgotForm = this.fb.group({
            email: ['', [Validators.required,emailValidator()]]
        });

        this.forgotForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
    }

    onValueChanged(data?: any) {
        if (!this.forgotForm) { return; }
        const form = this.forgotForm;

        for (const field in this.formErrors) {
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'email': ''
    };

    validationMessages = {
        'email': {
            'required': 'Email is required.',
            'incorrectMailFormat' : 'Email Format is not correct'
        },
    };

    forgotPassword() {
        this.loading = true;
        this._fps.forgotPasswordHttpCall(this.forgotForm.get('email').value).subscribe(res => {
            //this.message = res.json().msg;
            if (res.json().success) {
                this.alert = false;
                this.successAlert = true;

                this.successMessage = res.json().msg;

            }
            else {
                this.alert = true;
                this.successAlert = false;
                this.message = res.json().msg;
            }
        },
            err => { this.loading = false; this.alert = true; this.message = 'Connection Error'; console.log(err) },

        )
    }

}