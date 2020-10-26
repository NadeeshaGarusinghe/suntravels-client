import { ContractAddingService } from './../contract-adding.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-original-contracts',
  templateUrl: './view-original-contracts.component.html',
  styleUrls: ['./view-original-contracts.component.css']
})


export class ViewOriginalContractsComponent implements OnInit {
  OriginalContracts: any;
  roomDetails: any;
  hotelName = '';
  SearchHotel = '';
  constructor(private service: ContractAddingService) { }

  ngOnInit(): void {
    let resp = this.service.getOriginalContracts();
    resp.subscribe((data) => {
      this.OriginalContracts = data;
      console.log(this.OriginalContracts);
      for (var contract of this.OriginalContracts) {
        console.log(contract.hotelName);


      }
    });



  }


  getOriginalContracts() {
    let resp = this.service.getOriginalContracts();
    resp.subscribe((data) => this.OriginalContracts = data);
    console.log(resp);
  }

  onHotelFilter() {
    this.SearchHotel = this.hotelName;
  }

}
