import { Component } from '@angular/core';
import {ModalDirective} from "../../../node_modules/ng2-bootstrap/modal/modal.component";
import {ViewChild} from "../../../node_modules/@angular/core/src/metadata/di";

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent {
  @ViewChild('childModal') public childModal:ModalDirective;

  public showChildModal(): void {
    console.log('this.childModal', this.childModal);
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }
}
