
export class SearchData {
    public checkindate;
    public noofnights;
    public noOfRoomsWithAdults;



    public constructor(
        checkindate: Date,
        noofnights: number,
        noOfRoomsWithAdults: Array<{ maxadults: number }>

    ) {
        this.checkindate = checkindate;
        this.noofnights = noofnights;
        this.noOfRoomsWithAdults = noOfRoomsWithAdults;


    }
}