import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {DataGridModule} from 'primeng/datagrid';
import {PanelModule} from 'primeng/panel';
import {AccordionModule} from 'primeng/accordion';

import { AppComponent } from './app.component';
import { EstadosBrService } from './services/estados-br.service';
import { ManterUfComponent } from './manter-uf/manter-uf.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CouchUfComponent } from './couch-uf/couch-uf.component';
import { EstadosBrComponent } from './estados-br/estados-br.component';
import { MunicipiosBrService } from './services/municipios-br.service';
import { CidadesComponent } from './cidades/cidades.component';
import { EstudosTemplateComponent } from './estudos-template/estudos-template.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { CustomDataListComponent } from './custom-data-list/custom-data-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EstadosBrComponent,
    ManterUfComponent,
    HomeComponent,
    CouchUfComponent,
    CidadesComponent,
    EstudosTemplateComponent,
    TabContainerComponent,
    CustomDataListComponent
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
    AccordionModule,
    NgbModule.forRoot()
  ],
  providers: [EstadosBrService, MunicipiosBrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
