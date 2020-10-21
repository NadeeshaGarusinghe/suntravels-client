import { AbstractControl } from "@angular/forms";



export function EnddateValidator(control: AbstractControl): { [key: string]: boolean } | null {

    const startdate = control.get('startdate');
    const enddate = control.get('enddate');
    return startdate && enddate && startdate.value > enddate.value ?
        { 'misMatch': true } :
        null;
}