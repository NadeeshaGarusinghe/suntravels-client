import { ContractAddingService } from './contract-adding.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContractsComponent } from './add-contracts/add-contracts.component';
import { AbstractControl, FormBuilder, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { HomeComponent } from './home/home.component';
import { SearchContractComponent } from './search-contract/search-contract.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ViewResultComponent } from './view-result/view-result.component';
import { ViewOriginalContractsComponent } from './view-original-contracts/view-original-contracts.component';
import { FilterPipe } from './Pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddContractsComponent,
    AddHotelComponent,
    HomeComponent,
    SearchContractComponent,
    ViewResultComponent,
    ViewOriginalContractsComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxMatSelectSearchModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,

  ],
  providers: [ContractAddingService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
