import { AbstractControl } from "@angular/forms";



export function CheckinDateValidator(control: AbstractControl): { [key: string]: boolean } | null {

    const checkindate = control.get('checkindate');
    var today = new Date();
    console.log(today);
    return checkindate && today && checkindate.value < today ?
        { 'misMatch': true } :
        null;
}