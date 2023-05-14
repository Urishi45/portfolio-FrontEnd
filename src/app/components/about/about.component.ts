import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Data } from 'src/app/data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  imgUrl2 = 'assets/test-photo.jpg'
  data!: Data
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getData().subscribe(response => {
      this.data = response[0]
    })
  }

}
