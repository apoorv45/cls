import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    private storage: any;

    constructor() {
        this.storage = localStorage;
    }

    public retrieve(key: string): any {
        var item = this.storage.getItem(key);
        if (item && item !== 'undefined') {
            return JSON.parse(this.storage.getItem(key));
        }

        return;
    }

    public store(key: string, value: any) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    public remove(key: String): any {
         this.storage.removeItem(key);
    }

}