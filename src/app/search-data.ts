export class SearchData {
    public checkindate;
    public noofnights;
    public noofroomswithadults;

    public constructor(
        checkindate: Date,
        noofnights: number,
        noofroomswithadults: number,

    ) {
        this.checkindate = checkindate;
        this.noofnights = noofnights;
        this.noofroomswithadults = noofroomswithadults;


    }
}