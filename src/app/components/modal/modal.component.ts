/*
  The Modal Service and Component implemented here is based upon Jason Watmore's post at
  http://jasonwatmore.com/post/2018/05/25/angular-6-custom-modal-window-dialog-box.
*/
import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'cdc-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef ) {
    this.element = el.nativeElement;
   }

  ngOnInit(): void {
      let modal = this;
      // all modals must have an id
      if (!this.id) {
        console.error('modal must have an id.');
        return;
      }

      // place the modal on the page
      document.body.appendChild(this.element);

      // close model on background click
      this.element.addEventListener('click', function (e: any) {
        if (e.target.className === 'cdc-modal') {
          modal.close();
        }
      });

      // make modal service accessible from controllers
      this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('cdc-modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('cdc-modal-open');
  }


}
