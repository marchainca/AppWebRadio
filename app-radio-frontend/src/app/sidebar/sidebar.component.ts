import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports:  [CommonModule, FormsModule, TranslocoModule, SectionComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  /* constructor(
    private translocoService: TranslocoService,
  ) {} */
  isSidebarClosed = false; // Estado inicial del sidebar
  selectedOption: string  = '0';
  selectedLeng: string = '0'
  displayIcon: string = 'bi-display'

  @Output() sectionChanged = new EventEmitter<string>(); // Emite la sección seleccionada

  // Esta función se llama al hacer clic en alguna sección
  onSectionSelect(section: string) {
    this.sectionChanged.emit(section); // Emite la sección seleccionada
  }

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed; // Alterna el estado del sidebar
  }

  setLanguage() {
    console.log(`Idioma seleccionado: ${this.selectedLeng}`);
    // Implementar lógica de cambio de idioma aquí

    switch (this.selectedLeng) {
      case "0": 
        //this.translocoService.setActiveLang('es');  
        break;
      case "Inglés":
        //this.translocoService.setActiveLang('en');
        break;
      case "Español":
        //this.translocoService.setActiveLang('es');
        break;
      default:
        break;
    }
    
  }

  setTheme() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    console.log(`Modo de visualización seleccionado: ${this.selectedOption}`);
    switch (this.selectedOption) {
      case "0":
        this.displayIcon = 'bi-display';        
        break;
      case "1":
        this.displayIcon = 'bi bi-moon-stars-fill';
        break;
      case "2":
        this.displayIcon = 'bi bi-sun-fill';
        break;
      default:
        break;
    }
    
}


}
