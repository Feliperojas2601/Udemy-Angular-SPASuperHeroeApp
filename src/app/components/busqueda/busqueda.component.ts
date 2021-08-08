import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe} from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[] = [];
  termino:string = "";

  constructor(private activatedRoute:ActivatedRoute,
              private heroesService: HeroesService, 
              private router:Router) {
    this.activatedRoute.params.subscribe(params =>{
        this.termino = params['buscarTexto'];
        this.heroes = heroesService.buscarHeroes(params['buscarTexto']);
    })
   }

  ngOnInit(): void {
  }

  verHeroe(i:number){
    this.router.navigate(['/heroe',i]);
  }

}
