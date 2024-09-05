import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  dialogData:any;
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalDialogComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
}
