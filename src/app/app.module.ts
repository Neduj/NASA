import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HomeComponent} from './components/home/home.component';
import {MaterialModule} from "./material.module";
import {HttpClientModule} from "@angular/common/http";
import {PictureMinComponent} from "./components/picture-min/picture-min.component";
import {ImgViewDialogComponent} from "./components/picture-min/img-view-dialog/img-view-dialog.component";
import {MatCardModule} from "@angular/material/card";
import {
  ImgInfoBottomSheetComponent
} from "./components/picture-min/img-view-dialog/img-info-bottom-sheet/img-info-bottom-sheet.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PictureMinComponent,
    ImgViewDialogComponent,
    ImgInfoBottomSheetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexModule,
    FormsModule,
    RouterModule.forRoot([{
      path: '', component: HomeComponent
    }]),
    MaterialModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
