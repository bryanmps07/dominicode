import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, of } from "rxjs";

const departments = ['Marketing', 'Sales', 'Other', 'RRHH'];

@Injectable({ providedIn: 'root' })
export class DataResolverService implements Resolve<any> {
   
    resolve(): Observable<any> {
        // TODO: CALL SERVICE
        return of(departments);
    }

}