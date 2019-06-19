import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ConfigService {
    private url: string = "";
    private AppKey = "";
    constructor(private _http: Http) {
    }

    public load() {
        return new Promise((resolve, reject) => {
            this._http.get('/assets/config.json')
                .map(res => res.json())
                .subscribe(
                (data: any) => {
                    this.url = data.url;
                    this.AppKey = data.appkey;
                    resolve(true);
                },
                err => { console.log(err); reject(false); }
                );
        });
    }

    public getServerURL() {
        return this.url;
    }

    public getAppKey() {
        return this.AppKey;
    }
}