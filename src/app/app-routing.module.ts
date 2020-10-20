import { ViewResultComponent } from './view-result/view-result.component';
import { SearchContractComponent } from './search-contract/search-contract.component';
import { HomeComponent } from './home/home.component';
import { AddContractsComponent } from './add-contracts/add-contracts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "addContract", component: AddContractsComponent },
  { path: "home", component: HomeComponent },
  { path: "searchContract", component: SearchContractComponent },
  { path: "viewContracts", component: ViewResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
