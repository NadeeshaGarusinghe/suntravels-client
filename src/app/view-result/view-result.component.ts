import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractAddingService } from '../contract-adding.service';
import { MarkedupContract } from '../markedup-contract';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent implements OnInit {

  ELEMENT_DATA: MarkedupContract[] = [];
  displayedColumns: string[] = ['name', 'roomtype', 'markedupprice', 'availabilitystatus'];
  dataSource = new MatTableDataSource<MarkedupContract>(this.ELEMENT_DATA);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private service: ContractAddingService, private Activatedroute: ActivatedRoute,
    private router: Router,) { }

  sub;
  ngOnInit(): void {
    let resp = this.service.getContract();
    resp.subscribe(data => this.dataSource.data = data as MarkedupContract[]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

}
