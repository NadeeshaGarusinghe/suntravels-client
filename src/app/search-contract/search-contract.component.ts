import { SearchData } from './../search-data';
import { ContractAddingService } from './../contract-adding.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';
import { MarkedupContract } from '../markedup-contract';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-contract',
  templateUrl: './search-contract.component.html',
  styleUrls: ['./search-contract.component.css']
})

export class SearchContractComponent implements OnInit {

  massage: any;
  ELEMENT_DATA: MarkedupContract[];
  displayedColumns: string[] = ['name', 'roomtype', 'markedupprice', 'availabilitystatus'];
  dataSource: any;
  searchModel = new SearchData(null, null, null);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private fb: FormBuilder, private service: ContractAddingService, private router: Router, private activatedRoute: ActivatedRoute) { }

  public addmore: FormGroup;

  ngOnInit() {
    this.addmore = this.fb.group({
      checkindate: [],
      noofnights: [],
      noofroomswithadults: [],

    });

  }

  onsubmit() {
    let format = 'yyyy/MM/dd';
    let mydate = this.searchModel.checkindate;
    let locale = 'en-US';
    let formattedDate = formatDate(mydate, format, locale);
    console.log(formattedDate);

    this.service.setContract(formattedDate, this.searchModel.noofnights, this.searchModel.noofroomswithadults);

    let resp = this.service.ViewContracts(formattedDate, this.searchModel.noofnights, this.searchModel.noofroomswithadults);
    resp.subscribe(data => {
      console.log(data);
      this.massage = data;
      this.getAllContracts(formattedDate, this.searchModel.noofnights, this.searchModel.noofroomswithadults);
    });
    this.router.navigate(['viewContracts'], {
      state: {
        checkindate: formattedDate,
        noofadults: this.searchModel.noofnights,
        noofroomswithadults: this.searchModel.noofroomswithadults
      }
    });

  }

  getAllContracts(checkindate: string, noofnights: number, noofadults: number) {
    let resp = this.service.ViewContracts(checkindate, noofnights, noofadults);
    this.dataSource = new MatTableDataSource<MarkedupContract>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    resp.subscribe(data => this.dataSource = data);

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

}