import { Component, Input } from '@angular/core';
//import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal'; // Importe apenas o BsModalRef
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() card: any;
  showOptions = true;
  showPhone = false;
  showEmail = false;
  phoneNumber: string = '';
  email: string = '';
  selectedMethod: string = ''; // Guarda o método selecionado (telefone ou email)

  constructor(public activeModal: BsModalRef) {}

  mostrarCampo(metodo: string): void {
    this.selectedMethod = metodo;
  }
  showPhoneInput() {
    console.log("phoneInput");
    this.showOptions = false;
    this.showPhone = true;
  }

  showEmailInput() {
    this.showOptions = false;
    this.showEmail = true;
  }

  closeModal() {
    console.log("closeModal");
    this.showOptions = true;
    this.showPhone = false;
    this.showEmail = false;
    this.activeModal.hide();
  }

  requestContact() {
    if (this.phoneNumber) {
      // Lógica para solicitar contato via telefone
    } else if (this.email) {
      // Lógica para solicitar contato via e-mail
    }
  
  }
}
