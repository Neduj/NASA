import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../service/http.service";
import {Subject} from "rxjs";
import {IPhoto} from "../../models/photos.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data$: Subject<IPhoto[]> = this.httpService.data$;
  page: number = 1;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
  }

  onPageChange(page: number) {
    console.log(page)
    this.httpService.onPageChange(page);
  }

}
