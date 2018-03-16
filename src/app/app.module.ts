import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {DataGridModule} from 'primeng/datagrid';
import {PanelModule} from 'primeng/panel';

import { AppComponent } from './app.component';
import { EstadosBrComponent } from './estados-br/estados-br.component';
import { EstadosBrService } from './services/estados-br.service';
import { ManterUfComponent } from './manter-uf/manter-uf.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CouchUfComponent } from './couch-uf/couch-uf.component';


@NgModule({
  declarations: [
    AppComponent,
    EstadosBrComponent,
    ManterUfComponent,
    HomeComponent,
    CouchUfComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    FormsModule,
    DataGridModule,
    PanelModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [EstadosBrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
