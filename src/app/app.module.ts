import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatecuAlertBoxModule, MatecuSpinnerModule } from 'projects/angular-matecu/src/public-api';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MatecuTopbarLayoutModule } from 'projects/angular-matecu/src/lib/modules/matecu-topbar-layout/matecu-topbar-layout.module';
import { MatIconModule } from '@angular/material/icon';
import { AlertBoxComponent } from './components/alert-box/alert-box.component';

@NgModule({
  declarations: [AppComponent, IndexComponent, SpinnerComponent, TopbarComponent, AlertBoxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatecuSpinnerModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatecuTopbarLayoutModule,
    MatIconModule,
    MatecuAlertBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
