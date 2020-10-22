import { ContractAddingService } from './../contract-adding.service';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-original-contracts',
  templateUrl: './view-original-contracts.component.html',
  styleUrls: ['./view-original-contracts.component.css']
})


export class ViewOriginalContractsComponent implements OnInit {
  OriginalContracts: any;
  roomDetails: any;
  constructor(private service: ContractAddingService) { }

  ngOnInit(): void {
    let resp = this.service.getOriginalContracts();
    resp.subscribe((data) => {
      this.OriginalContracts = data;
      console.log(this.OriginalContracts);
      for (var contract of this.OriginalContracts) {
        console.log(contract);

      }
    });



  }


  getOriginalContracts() {
    let resp = this.service.getOriginalContracts();
    resp.subscribe((data) => this.OriginalContracts = data);
    console.log(resp);
  }

}
