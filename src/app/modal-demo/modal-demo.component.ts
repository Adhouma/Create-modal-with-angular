import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-demo',
  templateUrl: './modal-demo.component.html',
  styleUrls: ['./modal-demo.component.css']
})
export class ModalDemoComponent implements OnInit {

  closedResult = '';
  submitted = false;
  displayMessage = false;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void { }

  private getDismissionReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      this.submitted = false;
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      this.submitted = false;
      return 'by clicking on a backdrop';
    } else {
      return `with ${reason}`;
    }
  }

  showModal(myModal) {
    this.modalService.open(myModal, {
      ariaLabelledBy: 'modal-basic-title'
    }).result.then(result => {
      this.closedResult = `Closed with ${result}`;
    }), reason => {
      this.submitted = false;
      this.closedResult = `Dismissed with ${this.getDismissionReason(reason)}`;
    }
  }

  showMessage() {
    this.displayMessage = true;
    this.modalService.dismissAll('Cross click')
  }

}
