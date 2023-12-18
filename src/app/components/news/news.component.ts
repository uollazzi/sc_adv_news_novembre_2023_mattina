import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/news';
import { NewsService } from '../../services/news.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  news: Article[] = [];
  keywords: string = "";
  searchIn: string = "title";

  constructor(private ns: NewsService, private as: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.as.isUserLogged) {
      this.search();
    } else {
      this.router.navigate(["/login"]);
    }
  }

  search() {
    if (this.keywords.trim().length > 0) {
      this.ns.search(this.keywords.trim(), this.searchIn)
        .subscribe(sr => {
          console.log(sr.totalResults);
          this.news = sr.articles;
        })
    } else {
      this.ns.topHeadline()
        .subscribe(sr => {
          console.log(sr.articles);
          this.news = sr.articles;
        })
    }
  }
}
