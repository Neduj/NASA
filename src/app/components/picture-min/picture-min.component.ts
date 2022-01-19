import {Component, Input, OnInit} from '@angular/core';
import {IPhoto} from "../../models/photos.interface";
import {MatDialog} from "@angular/material/dialog";
import {ImgViewDialogComponent} from "./img-view-dialog/img-view-dialog.component";

@Component({
  selector: 'app-picture-min',
  templateUrl: './picture-min.component.html',
  styleUrls: ['./picture-min.component.css']
})
export class PictureMinComponent implements OnInit {
  @Input() photos: IPhoto[] = [];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openImgViewDialog(photo: IPhoto) {
    this.dialog.open(ImgViewDialogComponent, {
      data: photo,
    })
  }
}
