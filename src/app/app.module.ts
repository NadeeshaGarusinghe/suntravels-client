import { ContractAddingService } from './contract-adding.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContractsComponent } from './add-contracts/add-contracts.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { HomeComponent } from './home/home.component';
import { SearchContractComponent } from './search-contract/search-contract.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AddContractsComponent,
    AddHotelComponent,
    HomeComponent,
    SearchContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ContractAddingService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
