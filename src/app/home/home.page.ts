import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from '../equipe';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  _equipes: Equipe[] = [];
  equipeum: string;
  equipedois: string;
  pontosum: number = 0;
  pontosdois: number = 0;


  constructor(public router: Router, public alertController: AlertController) {
  }

  async presentAlert(titulo: string, subtitulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: titulo,
      subHeader: subtitulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

  public mais_tres() {
    let maistres = this.pontosum +=3;
    console.log(`Adicionou ${this.pontosum}`);
    if (this.pontosum >= 12) {
      this.presentAlert("Aviso!", "Fim de jogo", "Sua Dupla Ganhou!");
      this.zerarum();


    }
  }
  public menos_tres() {
    let  menostres = this.pontosum -=3;
    console.log(`Menos ${this.pontosum}`);
    if (this.pontosum < 1) {
      this.zerarum();
    }

  }
  public mais_um() {
    let maistres  = this.pontosum +=1;
    console.log(`Adicionou ${this.pontosum}`);
    if (this.pontosum >= 12) {
      this.presentAlert("Aviso!", "Fim de jogo", "Sua Dupla Ganhou!");
      this.zerarum();
    }
  }

  public menos_um() {
    let menosum = this.pontosum -=1;
    console.log(`Menos ${this.pontosum}`);
    if (this.pontosum < 1) {
      this.zerarum();
    }

  }

  public zerarum() {
    this.pontosum = 0;
    console.log(`Zerou ${this.pontosum}`);
  }








  public maistres() {
    let maistres = this.pontosdois +=3;
    console.log(`Adicionou ${this.pontosdois}`);
    if (this.pontosdois >= 12) {
      this.presentAlert("Aviso!", "Fim de jogo", "Sua Dupla Ganhou!");
      this.zerardois();
    }
  }
  public menostres() {
    let menostres = this.pontosdois -=3;
    console.log(`Menos ${this.pontosdois}`);
    if (this.pontosdois < 1) {
      this.zerardois();
    }

  }
  public maisum() {
    let maisum = this.pontosdois +=1;
    console.log(`Adicionou ${this.pontosdois}`);
    if (this.pontosdois >= 12) {
      this.presentAlert("Aviso!", "Fim de jogo", "Sua Dupla Ganhou!");
      this.zerardois();
    }
  }
  public menosum() {
    let menosum = this.pontosdois -=1;
    console.log(`Menos ${this.pontosdois}`);
    if (this.pontosdois < 1) {
      this.zerardois();
    }

  }
  public zerardois() {
    this.pontosdois = 0;
  }

}



