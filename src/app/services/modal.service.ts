import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modals: Array<any> = [];

  add(modal: any) {
      // add modal to array of active modals
      this.modals.push(modal);
  }

  remove(id: string) {
      // remove modal from array of active modals
      this.modals = this.modals.filter(f => f.id !== id);
  }

  open(id: string) {
      // open modal specified by id
      let modal: any = this.modals.filter(f => f.id === id)[0];
      modal.open();
  }

  close(id: string) {
      // close modal specified by id
      console.log('this is my modals array' + this.modals);
      let modal: any = this.modals.filter(f => f.id === id)[0];
      console.log('typeof modals: ' + this.modals);
      modal.close();
  }

}



