import { Injectable } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { WorkerDataService } from './services/worker-data.service';
import { switchMap, map, take, debounceTime } from 'rxjs/operators';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { Observable } from 'rxjs';
@Injectable()
export class CustomValidator {

    static debouncer: any;

    static uniqueJob(worker: WorkerDataService) {
        return (control: AbstractControl) => {
            // const username = control.value.toLowerCase();
            // if (!username || username === "")
            //     return Observable.create(null);
            // return worker.checkJobAlreadyExists(username)
            //     .pipe(
            //         debounceTime(500),
            //         take(1),
            //         map(data => data === "invalid" ? { jobExists: true } : null),
            // )
            clearTimeout(this.debouncer);

            return new Promise(resolve => {

                this.debouncer = setTimeout(() => {

                    worker.checkJobAlreadyExists(control.value).subscribe((data) => {
                        if (data === "invalid") {
                            resolve({ jobExists: true });
                        } else {
                            resolve(null);
                        }
                    }, (err) => {
                        resolve({ jobExists: true });
                    });

                }, 1000);

            });
        };
    }

}