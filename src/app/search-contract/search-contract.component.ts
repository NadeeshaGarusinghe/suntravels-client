import { ContractAddingService } from './../contract-adding.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { SearchData } from '../searchData';
import { CheckinDateValidator } from '../shared/checkindate.validator';

@Component({
  selector: 'app-search-contract',
  templateUrl: './search-contract.component.html',
  styleUrls: ['./search-contract.component.css']
})
export class SearchContractComponent implements OnInit {

  massage: any;
  searchModel: SearchData = new SearchData(null, null, [{
    "maxadults": null
  }]);

  constructor(private fb: FormBuilder, private service: ContractAddingService, private router: Router) { }

  public addmore: FormGroup;

  ngOnInit() {
    this.addmore = this.fb.group({
      checkindate: ['', Validators.required],
      noofnights: ['', Validators.required],
      noOfRoomsWithAdults: this.fb.array([this.initItemRows()])
    }, { validator: CheckinDateValidator });
  }

  get formArr() {
    return this.addmore.get('noOfRoomsWithAdults') as FormArray;
  }

  initItemRows() {
    return this.fb.group({
      maxadults: ['', Validators.required]
    });
  }

  addNewRow() {
    this.formArr.push(this.initItemRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

  onsubmit() {
    let formattedDate = this.formatDate(this.searchModel.checkindate);
    let adultArray = [];
    for (let value of this.addmore.value.noOfRoomsWithAdults) {
      adultArray.push(value.maxadults);
    }
    this.service.setContract(formattedDate, this.searchModel.noofnights, adultArray);
    this.router.navigate(['viewContracts'], {
      state: {
        checkindate: formattedDate,
        noofadults: this.searchModel.noofnights,
        noofroomswithadults: adultArray
      }
    });
  }

  formatDate(date: string) {
    let format = 'yyyy/MM/dd';
    let locale = 'en-US';
    return formatDate(date, format, locale);
  }
}