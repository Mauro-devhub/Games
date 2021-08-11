import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  @ViewChild('showcomponent', { read: ViewContainerRef , static: true}) entry!: ViewContainerRef;
  

  constructor(private resolver: ComponentFactoryResolver) {

  }

  ngOnInit():void {
    this.loadcomponent();
  }

  arrayCmpt:any = [
    'games'
  ]

  async loadcomponent () {
    for (var arr of this.arrayCmpt) {
      if (arr == 'games') {
        this.entry.clear();
        await import('./games/games.component').then(({GamesComponent}) => {
          this.entry.createComponent(this.resolver.resolveComponentFactory(GamesComponent))
        })
      }
    }
  }
}
