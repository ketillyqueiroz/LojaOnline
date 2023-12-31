import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationsComponent } from './components/informations/informations.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: 'informations', component: InformationsComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
