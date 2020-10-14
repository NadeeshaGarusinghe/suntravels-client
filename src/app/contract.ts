import { itemrow } from './model/itemrow.model';
export class Contract {
    public Hotel;
    public startdate;
    public enddate;
    public itemRows;
    public markup;
    public itemrow;

    public constructor(
        Hotel: any,
        startdate: Date,
        enddate: Date,
        markup: number,
        roomDetails: Array<{ rprice: number, rtype: number, maxadults: number, availablerooms: number }>
        //[{ "rprice": any, "rtype": any, "maxadults": any, "availablerooms": any }]
    ) {
        this.Hotel = Hotel;
        this.startdate = startdate;
        this.enddate = enddate;
        this.markup = markup;
        this.itemRows = roomDetails;

    }
}