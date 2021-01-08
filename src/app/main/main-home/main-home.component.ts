import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

interface ArticleResponse{
  title: string;
  author: string;
  body: string;
  date: string;
  image: string;
}

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})

export class MainHomeComponent implements OnInit {
  image = "/assets/images/top-main.jpg";
  url = "/assets/images/cookies.jpg";
  articles: ArticleResponse;

  constructor(private mainService: MainService) { }
  
  ngOnInit(): void {
    this.mainService.getArticle().subscribe((res) => {
      this.articles = res;
    })
  }

}
