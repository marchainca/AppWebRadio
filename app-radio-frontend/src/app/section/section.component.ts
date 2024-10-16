import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedSection']) {
      this.updateNews(changes['selectedSection'].currentValue);
    }
  }
  @Input() selectedSection: string = 'actualidad'; // La sección Actulidad se mostrará por default
  // Noticias de ejemplo para cada sección
  actualidadNews = [
    { image: 'https://via.placeholder.com/300x200', date: '2024-10-16', title: 'Noticia de Actualidad 1' },
    { image: 'https://via.placeholder.com/300x200', date: '2024-10-15', title: 'Noticia de Actualidad 2' },
  ];

  artistasLocalesNews = [
    { image: 'https://via.placeholder.com/300x200', date: '2024-10-14', title: 'Artista Local 1' },
    { image: 'https://via.placeholder.com/300x200', date: '2024-10-13', title: 'Artista Local 2' },
  ];

  noticiasNews = [
    { image: 'https://via.placeholder.com/300x200', date: '2024-10-12', title: 'Noticia 1' },
    { image: 'https://via.placeholder.com/300x200', date: '2024-10-11', title: 'Noticia 2' },
  ];

  comunicacionesNews = [
    { image: 'https://via.placeholder.com/300x200', date: '2024-10-10', title: 'Comunicación 1' },
    { image: 'https://via.placeholder.com/300x200', date: '2024-10-09', title: 'Comunicación 2' },
  ];

  // Por defecto, mostrar noticias de Actualidad
  selectedNews = this.actualidadNews;

  // Función para actualizar las noticias según la sección seleccionada
  updateNews(section: string) {
    switch (section) {
      case 'actualidad':
        this.selectedNews = this.actualidadNews;
        break;
      case 'artistas':
        this.selectedNews = this.artistasLocalesNews;
        break;
      case 'noticias':
        this.selectedNews = this.noticiasNews;
        break;
      case 'comunicaciones':
        this.selectedNews = this.comunicacionesNews;
        break;
      default:
        this.selectedNews = this.actualidadNews;
    }
  }

}
