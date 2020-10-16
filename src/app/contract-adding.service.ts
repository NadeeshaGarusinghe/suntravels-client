import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractAddingService {

  constructor(private http: HttpClient) { }

  public doContractAdding(contract) {
    return this.http.post("http://localhost:9090/suntravels/addContract", contract, { responseType: 'text' as 'json' })

  }
  getHotels() {
    return this.http.get("http://localhost:9090/suntravels/getHotels");
  }

  getRoomTypes() {
    return this.http.get("http://localhost:9090/suntravels/getRoomTypes");
  }

  addHotel() {
    return ("bbbbbbbbbbb");

  }


}
