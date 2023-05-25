import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  calendario = {
    mes: 'nulo',
    ano: 2023,
    foto: "https://images.pexels.com/photos/8646391/pexels-photo-8646391.jpeg",
    dias_da_semana: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
    dias_da_semana_m: ['Dm', 'Sg', 'Tr', 'Qa', 'Qi', 'Sx', 'Sb'],
    primeira_semana: ["", 1, 2, 3, 4, 5, 6],
    segunda_semana: [7,8,9,10,11,12,13],
    terceira_semana: [14,15,16,17,18,19,20],
    quarta_semana: [21,22,23,24,25,26,27],
    quinta_semana: [28,29,30,31, '', '',''],
  }
}
