import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getNews(){
    return [
      { title: 'Noticia 1', description: 'Descripción de la noticia 1', imageUrl: 'path/to/image1.jpg' },
      { title: 'Noticia 2', description: 'Descripción de la noticia 2', imageUrl: 'path/to/image2.jpg' }
    ]
  }
}
