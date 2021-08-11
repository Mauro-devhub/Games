import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {

  image:string = '../assets/images/pikachu.webp';
  image2:string = '../assets/images/lukario.webp';

  value:string = 'success';
  value2:string = 'success';

  atack:number = 1;
  atack2:number = 1;

  load:boolean = false;
  count:number = 5;
  text:string = 'Get Ready';

  show:boolean;
  image3:string;
  text2:string;

  constructor() {
  }

  ngOnInit(): void {
    window.setInterval(() => {
      if (this.count != 0) {
        this.count--
        if (this.count <= 3.5) {
          this.text = 'Ready';
          if (this.count <= 1.5) {
            this.text = 'Fight!!'
            if (this.count == 0) {
              this.load = true;
            }
          }
        }
      }
    }, 1000);
  }

  pikachu() {
    setTimeout(() => {
      this.image = '../assets/images/pikachuFight.webp';
      this.image2 = '../assets/images/lukarioHerido.webp';
      var re:number = Math.random();
      this.atack2 = this.atack2 - re;
      this.changeColor();
      this.showWinner();
    }, 250);
    setTimeout(() => {
      this.image2 = '../assets/images/lukario.webp';
      this.image = '../assets/images/pikachu.webp';
    }, 650);
  }

  lukario() {
    setTimeout(() => {
      this.image = '../assets/images/pikachuHerido.webp';
      this.image2 = '../assets/images/lukarioFight.webp';
      var re:number = Math.random();
      this.atack = this.atack - re;
      this.changeColor2();
      this.showWinner();
    }, 250);
    setTimeout(() => {
      this.image2 = '../assets/images/lukario.webp';
      this.image = '../assets/images/pikachu.webp';
    }, 650);
  }
  
  changeColor() {
    if (this.atack2 > 0.3 && this.atack2 < 0.6) this.value2 = 'warning';
    if (this.atack2 <= 0.3) this.value2 = 'danger';
  }
  changeColor2() {
    if (this.atack > 0.3 && this.atack < 0.6) this.value = 'warning';
    if (this.atack <= 0.3) this.value = 'danger';
  }

  showWinner() {
    setTimeout(() => {
      if (this.atack <= 0.0) {
        this.image3 = '../assets/images/lukarioFight.webp';
        this.text2 = 'Lukario gana la pelea';
        this.load = false;
        this.show = true;
      }
      if (this.atack2 <= 0.0) {
        this.image3 = '../assets/images/pikachuFight.webp';
        this.text2 = 'Pikachu gana la pelea';
        this.load = false;
        this.show = true;
      }
    }, 1500);
  }
}
