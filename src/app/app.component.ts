import { Component, Inject } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog-component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
