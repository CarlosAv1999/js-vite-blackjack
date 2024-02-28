import _ from "underscore";
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, acumularPuntos, crearCartaHTML } from "../usecases"; 
// import { crearDeck as crearNuevoDeck } from "../usecases/crear-deck"; // Renombra la funcion original para este modulo crearNuevoDeck nuevo nombre
//import cualquierNombreParaCrearUnNuevoDeck from "../usecases/crear-deck"; // importa los metodos default de un modulo
// import  crearDeck, { miNombre }  from "../usecases/crear-deck"; Importa varias metodos o variables individuales de un modulo

const miModulo = (() => {
  'use strict'
  
  let deck = [];
  const   tipos = ["C", "D", "H", "S"],
          especiales = ["A", "J", "Q", "K"];

  let puntosJugadores = [];

  //referencias a html
  const btnPedir = document.querySelector("#btnPedir"),
        btnNew = document.querySelector("#btnNew"),
        btnStop = document.querySelector("#btnStop");

  const marcador = document.querySelectorAll("small"),
        divCartasJugador = document.querySelectorAll(".divCartas")

        //deck = crearDeck(tipos, especiales);
        

  //Esta fucion inicializa el juego
  const inicializarJuego = ( numJugadores = 2) =>{
      deck = crearDeck(tipos, especiales);
      puntosJugadores = [];
      for (let i = 0; i < numJugadores ; i++) {
          puntosJugadores.push(0);
      }

      marcador.forEach(elem => elem.innerText = 0);
      divCartasJugador.forEach(elem => elem.innerHTML = "");

      btnPedir.disabled = false;
      btnStop.disabled = false

  }

  inicializarJuego();

  //eventos
  btnPedir.addEventListener("click", () => {
      const carta = pedirCarta( deck);
      const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, marcador);

      marcador[0].innerText = puntosJugador;
      crearCartaHTML(carta, 0, divCartasJugador);

      if (puntosJugador > 21) {
          console.warn("Perdiste");
          btnPedir.disabled = true;
          btnStop.disabled = true;
          turnoComputadora(puntosJugador, deck, puntosJugadores, marcador, divCartasJugador);
      } else if (puntosJugador === 21) {
          console.warn("21 genial");
          btnPedir.disabled = true;
          btnStop.disabled = true;
          turnoComputadora(puntosJugador, deck, puntosJugadores, marcador, divCartasJugador);
      }
  });

  btnStop.addEventListener("click", () => {

      btnPedir.disabled = true;
      btnStop.disabled = true;
      turnoComputadora(puntosJugadores[0], deck, puntosJugadores, marcador, divCartasJugador);

  });

  btnNew.addEventListener("click", () => {

      inicializarJuego();

  });

  return {
      nuevoJuego: inicializarJuego
  };

})();

// (function () { Mismo patron modulo pero con sintaxis tradicional
  
// })();









