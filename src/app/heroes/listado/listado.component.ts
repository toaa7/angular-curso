import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America','Black widow'];
  heroeBorrado: string ='';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift()|| '';

  }

  

}
