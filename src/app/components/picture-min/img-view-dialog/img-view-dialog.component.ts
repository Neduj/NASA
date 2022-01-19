import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {IPhoto} from "../../../models/photos.interface";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {ImgInfoBottomSheetComponent} from "./img-info-bottom-sheet/img-info-bottom-sheet.component";

@Component({
  selector: 'app-img-view-dialog',
  templateUrl: './img-view-dialog.component.html',
  styleUrls: ['./img-view-dialog.component.css']
})
export class ImgViewDialogComponent {
  content = `${this.data.camera.full_name} ${this.data.camera.name}`;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IPhoto, private bottomSheet: MatBottomSheet) {
  }

  openImgInfoBottomSheet() {
    this.bottomSheet.open(ImgInfoBottomSheetComponent, {
      data: this.data
    })
  }
}
