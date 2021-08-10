import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbargeneralComponent } from './navbargeneral/navbargeneral.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    NavbargeneralComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],

  exports:[
    NavbargeneralComponent
  ]
})
export class OrganizadorComponentesModule { }
