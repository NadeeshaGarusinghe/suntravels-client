import { ContractAddingService } from './../contract-adding.service';
import { Component, OnInit } from '@angular/core';
import { Contract } from '../contract';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnddateValidator } from '../shared/enddate.validator';

@Component({
  selector: 'app-add-contracts',
  templateUrl: './add-contracts.component.html',
  styleUrls: ['./add-contracts.component.css']
})

export class AddContractsComponent implements OnInit {
  Hotels: any;
  RoomTypes: any;
  contract: Contract = new Contract(null, null, null, 15, [{
    "rtypeid": null, "rprice": null, "maxadults": null, "availablerooms": null
  }]);
  message: any;
  show: boolean = true;
  constructor(private fb: FormBuilder, private service: ContractAddingService) { }

  public addmore: FormGroup;

  ngOnInit() {
    this.addmore = this.fb.group({
      hid: ['', Validators.required],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],
      markup: ['', Validators.required],
      roomDetails: this.fb.array([this.initItemRows()])
    }, { validator: EnddateValidator });


    let roomTypes = this.service.getRoomTypes();
    roomTypes.subscribe((data) => this.RoomTypes = data);

    let hotels = this.service.getHotels();
    hotels.subscribe((data) => this.Hotels = data);
  }

  get formArr() {
    return this.addmore.get('roomDetails') as FormArray;
  }

  initItemRows() {
    return this.fb.group({
      rprice: ['', Validators.required],
      maxadults: ['', Validators.required],
      availablerooms: ['', Validators.required],
      rtypeid: ['', Validators.required]
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
    for (let i = 0; i < this.addmore.value.roomDetails.length; i++) {
      this.addmore.value.roomDetails[i].rtypeid = this.addmore.value.roomDetails[i].rtypeid.rtypeid;
    }
    this.addmore.value.hid = this.addmore.value.hid.hid;
    let resp = this.service.doContractAdding(this.addmore.value);
    resp.subscribe((data) => this.message = data);
    this.show == false;
    console.log("Contract is Added successfully");
  }

  onChangeHotel() {
    //let Cont = this.addmore.controls['Hotel'].value;
    //const hotelId = Cont.hid;
  }

  addHotel() {
    let resp = this.service.addHotel();
  }
}
