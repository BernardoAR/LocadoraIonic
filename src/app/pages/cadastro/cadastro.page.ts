import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss']
})
export class CadastroPage implements OnInit {
  filme: { titulo: string; genero: string };
  constructor(private fb: AngularFireDatabase) {
    this.filme = {
      titulo: '',
      genero: ''
    };
  }
  grava() {
    console.log(this.filme);
    this.fb.list('/locadora').push(this.filme);
  }
  ngOnInit() {}
}
