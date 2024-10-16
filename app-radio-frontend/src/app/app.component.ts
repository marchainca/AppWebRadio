import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionComponent } from './section/section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent, SectionComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-radio-frontend';
  selectedSection: string = 'actualidad'; // Por defecto, la sección de Actualidad

  // Función para recibir el cambio de sección desde el SidebarComponent
  onSectionChange(section: string) {
    this.selectedSection = section;
  }
}
