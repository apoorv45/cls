import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ResetPasswordService } from "./reset-password.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from "../../shared/custom-validator.class";

@Component({
    selector: 'resetpass',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
    token;
    resetForm: FormGroup;
    loading: boolean = false;
    alert; message;
    constructor(
        private _activatedRouter: ActivatedRoute,
        private _rps: ResetPasswordService,
        private router: Router,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this._activatedRouter.params.forEach((params: Params) => {
            this.token = params['token'];
            this.resetForm = this.fb.group({
                newPassword: ['', [Validators.required, Validators.pattern('^(?=.*[@#$%^&+=]).*$')]],
                confirmPassword: ['', [Validators.required, confirmPasswordValidator()]]
            });
        });
        this.resetForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
    }

    onValueChanged(data?: any) {
        if (!this.resetForm) { return; }
        const form = this.resetForm;

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

    resetPassword() {
        this.loading = true;
        this._rps.resetPasswordHttpCall(this.token, this.resetForm.get('newPassword').value).subscribe(res => {
            if (res.json().success) {
                this.router.navigate(['./login']);
            } else {
                this.alert = true;
                this.message = res.json().msg;
            }
        },
            err => {
                this.loading = false;
                this.alert = true;
                this.message = 'Connection Error';
            },
            () => {
                this.loading = false;
            }
        );
    }


    formErrors = {
        'newPassword': '',
        'confirmPassword': ''
    };

    validationMessages = {
        'newPassword': {
            'required': 'Password is required.',
            'pattern': 'Password should have one special character'
        },
        'confirmPassword': {
            'required': 'Password is required.',
            'confirmPassword': 'New Password and confirm Password doesnot Match'
        }
    };

}
