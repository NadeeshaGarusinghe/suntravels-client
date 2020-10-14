import { ContractAddingService } from './../contract-adding.service';
import { Component, OnInit } from '@angular/core';
import { Contract } from '../contract';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-contracts',
  templateUrl: './add-contracts.component.html',

  styleUrls: ['./add-contracts.component.css']
})
export class AddContractsComponent implements OnInit {

  contract: Contract = new Contract(null, null, null, 15, [{
    "rtype": null, "rprice": null, "maxadults": null, "availablerooms": null
  }]);
  message: any;
  constructor(private fb: FormBuilder, private service: ContractAddingService) { }


  public addmore: FormGroup;

  ngOnInit() {
    this.addmore = this.fb.group({
      Hotel: [],
      startdate: [],
      enddate: [],
      markup: [],
      roomDetails: this.fb.array([this.initItemRows()])
    });
  }



  get formArr() {
    return this.addmore.get('roomDetails') as FormArray;
  }

  initItemRows() {
    return this.fb.group({
      rprice: [],
      maxadults: [],
      availablerooms: [],
      rtype: []
    });
  }
  addNewRow() {
    this.formArr.push(this.initItemRows());

  }
  deleteRow(index: number) {
    this.formArr.removeAt(index);

  }
  submit() {
    console.log(this.addmore.value);
  }

  addContract() {
    let resp = this.service.doContractAdding(this.addmore.value);
    console.log(this.addmore.value);

    resp.subscribe((data) => this.message = data);

  }

}
