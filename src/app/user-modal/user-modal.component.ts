import { Component, Input } from '@angular/core';
import {ModalDirective} from "../../../node_modules/ng2-bootstrap/modal/modal.component";
import {ViewChild} from "../../../node_modules/@angular/core/src/metadata/di";

import {Store} from "../../../node_modules/@ngrx/store/src/store";
import {UsersServise} from "../users.service";
import {editUser, addUser} from "../actions/users.actions";
import {NgForm} from "../../../node_modules/@angular/forms/src/directives/ng_form";
import {OnInit, AfterViewInit} from "../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
import {NgModel} from "../../../node_modules/@angular/forms/src/directives/ng_model";

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {
  @ViewChild('childModal') public childModal:ModalDirective;
  @ViewChild('userForm') public userForm: NgForm;
  // @ViewChild('name') public name: NgModel;
  @Input() userData;

  public showChildModal(): void {
    this.userForm.form.reset();
    this.childModal.show();
    // console.log(this.name);
  }

  public hideChildModal(): void {
    this.childModal.hide();
    this.userForm.form.reset();
  }

  constructor(private usersServise: UsersServise, private store: Store<any>) {}

  ngOnInit() {
    this.userForm.form.reset();
  }

  private onSubmit(userForm) {
    if (userForm.valid ) {
      const user = Object.assign({}, this.userData.user, userForm.value);

      if (userForm.dirty) {
        this.userData.isAdd ? this.store.dispatch(addUser(user)) : this.store.dispatch(editUser(user));
      }

      this.hideChildModal();
    }
  }
}
