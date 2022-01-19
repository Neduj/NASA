import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from "@angular/material/bottom-sheet";
import {IPhoto} from "../../../../models/photos.interface";

@Component({
  selector: 'app-img-info-bottom-sheet',
  templateUrl: './img-info-bottom-sheet.component.html',
  styleUrls: ['./img-info-bottom-sheet.component.css']
})
export class ImgInfoBottomSheetComponent implements OnInit {
  photoData = this.data;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) private data: IPhoto) {
  }

  ngOnInit(): void {
    console.log(this.photoData)
  }

}
