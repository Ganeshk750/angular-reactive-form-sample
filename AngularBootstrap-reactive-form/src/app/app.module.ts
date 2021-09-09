import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngb-modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmpFormComponent } from './components/emp-form/emp-form.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UpdateEmpComponent } from './components/update-emp/update-emp.component';

//import { MatExpansionModule } from '@angular/material/expansion';

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'left',
      distance: 12
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};


@NgModule({
  declarations: [
    AppComponent,
    EmpFormComponent,
    EmpListComponent,
    NotFoundComponent,
    UpdateEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
     //MatExpansionModule,
    BrowserAnimationsModule,
    NotifierModule.withConfig(customNotifierOptions),
    ModalModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
