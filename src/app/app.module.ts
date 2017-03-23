import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { ModalModule }          from 'ng2-bootstrap/modal';

import { UsersServise } from './users.service';

import { AppComponent }       from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import {StoreModule} from "../../node_modules/@ngrx/store/src/ng2";
import {StoreDevtoolsModule} from "../../node_modules/@ngrx/store-devtools/src/instrument";
import {users} from "./reducers/users.reducer";
import {EffectsModule} from "../../node_modules/@ngrx/effects/src/effects.module";
import {UsersEffects} from "./effects/users.effects";

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: UsersListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserFormComponent,
    UserModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot(),
    StoreModule.provideStore({users}),
    StoreDevtoolsModule.instrumentStore({
      maxAge: 5
    }),
    EffectsModule.run(UsersEffects),
  ],
  providers: [UsersServise],
  bootstrap: [AppComponent]
})
export class AppModule { }
