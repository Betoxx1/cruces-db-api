import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { KeysPipe } from './components/data-table-dinamic-list/keys.pipe';

//added
import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

//custom

import { UserService } from './services/user.service';
import { DataTableDinamicListComponent } from './components/data-table-dinamic-list/data-table-dinamic-list.component';

//import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [ //aqui se importan los componentes.
    AppComponent,
    KeysPipe,
    DataTableDinamicListComponent
    
    
  ],
  imports: [ //aqui se importan los modulos
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
    //,
    //MatFormFieldModule
  ],
  providers: [UserService], //aqui se importan los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
