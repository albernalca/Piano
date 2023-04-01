import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  titulo = 'Piano con Angular';
  //creo variables
  do = 'do'
  re = 're'
  mi = 'mi'
  fa = 'fa'
  sol = 'sol'
  la = 'la'
  si = 'si'
  
  //creo metodo pasando parámetro texto
  aplicarSonido(texto: string): void {
    //declaro constante audio y la instancio
    const audio = new Audio()
    //ejecuto la ruta de los sonidos y concateno el texto
    audio.src = 'assets/sonidos/' + texto + '.wav'
    //instrucción para que cargue el audio
    audio.load()
    //intrucción para que lo ejecute
    audio.play()

  }


}
