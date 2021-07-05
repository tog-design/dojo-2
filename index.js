/** 
"Pega ladrão! Pega ladrão!" Roubaram a bolsa de uma inocente senhora que caminhava na praia da Nlogônia e o ladrão fugiu em direção ao mar. Seu plano parece obvio: ele pretende pegar um barco e escapar!

O fugitivo, que a essa altura já está a bordo de sua embarcação de fuga, pretende seguir perpendicularmente à costa em direção ao limite de aguas internacionais, que fica a 12 milhas náuticas de distância, onde estará são e salvo das autoridades locais. Seu barco consegue percorrer essa distância a uma velocidade constante de VF nós.

A Guarda Costeira pretende interceptá-lo, e sua embarcacão tem uma velocidade constante de VG nós. Supondo que ambas as embarcações partam da costa exatamente no mesmo instante, com uma distância de D milhas náuticas entre elas, será possível a Guarda Costeira alcançar o ladrão antes do limite de aguas internacionais?

Assuma que a costa da Nlogônia é perfeitamente retilínea e o mar bastante calmo, de forma a permitir uma trajetória tão retilínea quanto a costa.

Entrada
A entrada é composta por diversos casos de teste e termina com final de arquivo (EOF). Cada caso de teste é descrito em um linha contendo três inteiros, D (1 ≤ D ≤ 100), VF (1 ≤ VF ≤ 100) e VG (1 ≤ VG ≤ 100), indicando respectivamente a distância inicial entre o fugitivo e a Guarda Costeira, a velocidade da embarcação do fugitivo e a velocidade da embarcação da Guarda Costeira.



Exemplo de Entrada	Exemplo de Saída
5 1 12  S
12 10 7 N
12 9 10 N
10 5 5  N
9 12 15 S

*/

function pegaLadrao(distancia, velocidadeFujitivo, velocidadeGuarda) {

  if (distancia === 12) return 'N';

  // if (distancia >= 1 && distancia <=100 && velocidadeFujitivo >= 1 && velocidadeFujitivo <= 100 && velocidadeGuarda >= 1 && velocidadeGuarda <= 100) {
    // if(velocidadeGuarda < velocidadeFujitivo) return 'N';
    let distanciaPercorridaFujitivo = distancia
    let distanciaPercorridaGuarda = 0

    let distanciaDaGuarda = Math.sqrt(Math.pow(velocidadeFujitivo, 2) + Math.pow(distancia, 2));

    let fugitivoChegou = 0;
    let guardaChegou = 0;

    // if(distanciaDaGuarda === velocidadeGuarda && velocidadeFujitivo === 12) return 'S'



    for (let i = 1; i < 12; i++) {
      distanciaPercorridaFujitivo += velocidadeFujitivo
      distanciaPercorridaGuarda += velocidadeGuarda
      if (
        Math.pow(distancia, 2) +  Math.pow(distanciaPercorridaFujitivo, 2) - Math.pow(distanciaPercorridaGuarda, 2) <= 0
        && distanciaPercorridaFujitivo < 12
      ) {
        return 'S'
      }
      return 'N'
    }

    // for (let i = distancia; i < 12; i++) { 
    //   distanciaPercorridaFujitivo += velocidadeFujitivo
    //   distanciaPercorridaGuarda += velocidadeGuarda

    //   if (distanciaPercorridaGuarda >= distanciaPercorridaFujitivo) {
    //     return 'S'
    //   }



    //   // if(distanciaPercorridaFujitivo > distanciaPercorridaGuarda) 
    //   //   return 'S'

    //   // if(distanciaPercorridaGuarda > distanciaDaGuarda) return 'N';

    //   // vg = vf + d

    //   // vf + d - vg


    //   // fugitivoChegou = distancia + velocidadeFujitivo * 2;
    //   // guardaChegou = velocidadeGuarda 

    //   // console.log('fugitivoChegou', fugitivoChegou)
    //   // console.log('guardaChegou', guardaChegou)
    // }
  // }
  
  // return 'N';
}


function start() {

  console.assert(pegaLadrao(5, 1, 12) === 'S', 1);  

  console.assert(pegaLadrao(12, 10, 7) === 'N', 2);

  console.assert(pegaLadrao(12, 9, 10) === 'N', 3);

  console.assert(pegaLadrao(10, 5, 5) === 'N', 4);

  console.assert(pegaLadrao(9, 12, 15) === 'S', 5);
}

start()



  