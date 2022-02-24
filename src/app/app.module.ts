import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { journalComponent } from './journal/journal.component';
import { dialogaddComponent } from './journal/journal.component';
import { dialogeditComponent } from './journal/journal.component';
import { AppDB } from './journal/db/db';
@NgModule({
  declarations: [  
    AppComponent,
    journalComponent,
    dialogaddComponent,
    dialogeditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,   
    MatButtonModule,
    MatButtonToggleModule,   
    MatDialogModule,  
    MatInputModule,
    MatTableModule,
  ],
  providers: [ { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },AppDB],
  bootstrap: [AppComponent,journalComponent],

  entryComponents: [journalComponent, dialogaddComponent ],
})
export class AppModule { }
