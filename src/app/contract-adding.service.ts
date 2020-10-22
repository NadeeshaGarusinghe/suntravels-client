import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractAddingService {
  check: any;

  constructor(private http: HttpClient) { }

  public doContractAdding(contract) {
    return this.http.post("http://localhost:9090/addContract", contract, { responseType: 'text' as 'json' })

  }
  getHotels() {
    return this.http.get("http://localhost:9090/getHotels");
  }

  getOriginalContracts() {
    console.log("nnnnnnnnnnnnnn");
    let y = this.http.get("http://localhost:9090//getOriginalContracts");
    console.log(y);
    return y
  }

  getRoomTypes() {
    return this.http.get("http://localhost:9090/getRoomTypes");
  }

  addHotel() {
    return ("bbbbbbbbbbb");

  }

  public ViewContracts(checkindate, noofnights, noofroomswithadults) {
    return this.http.get('http://localhost:9090/api/joinQuery3', {
      params: {
        checkindate: checkindate,
        noofnights: noofnights,
        noofroomswithadults: noofroomswithadults
      }
    });
  }

  setContract(checkindate, noofnights, noofroomswithadults) {
    this.check = this.http.get('http://localhost:9090/api/joinQuery3', {
      params: {
        checkindate: checkindate,
        noofnights: noofnights,
        noofroomswithadults: noofroomswithadults
      }
    });
  }

  getContract() {
    return this.check;
  }
}
