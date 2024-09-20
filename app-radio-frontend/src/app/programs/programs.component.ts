import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent implements OnInit {
  constructor(){}

  programs: any[] = [];
  ngOnInit(): void {
    this.programs = [
      {
        title: 'Programa 1', description: 'Descripción del programa 1', imageUrl: 'path/to/image1.jpg'
      },
      {
        title: 'Programa 2', description: 'Descripción del programa 2', imageUrl: 'path/to/image2.jpg'
      }
    ]
  }
}
