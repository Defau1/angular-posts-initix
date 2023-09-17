import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit{

  constructor(private http: HttpClient) {}

  posts: any[] = [];

  ngOnInit(): void {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(
      (data: any[]) => {
        this.posts = data;
      },
      (error) => {
        console.log('Ошибка в загрузке данных постов', error)
      }
    )
  }

}
