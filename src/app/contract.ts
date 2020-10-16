import { itemrow } from './model/itemrow.model';
export class Contract {
    public hid;
    public startdate;
    public enddate;
    public itemRows;
    public markup;
    public itemrow;

    public constructor(
        hid: any,
        startdate: Date,
        enddate: Date,
        markup: number,
        roomDetails: Array<{ rprice: number, rtypeid: number, maxadults: number, availablerooms: number }>
        //[{ "rprice": any, "rtype": any, "maxadults": any, "availablerooms": any }]
    ) {
        this.hid = hid;
        this.startdate = startdate;
        this.enddate = enddate;
        this.markup = markup;
        this.itemRows = roomDetails;

    }
}