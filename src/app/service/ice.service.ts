import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IceService {

  private ices:Ice[] = [
    {
      autor: "Emma Leyer ",
      frase: "Respetar a los animales es una obligación, amarlos es un privilegio",
      img: "assets/img/A-1.jpg",
      aparicion: "1941-11-01",
      casa:"zoo",
      update:"actualizado hace 1 mins",
      detail:"En la clasificación científica de los seres vivos, los animales (Animalia) o metazoos (Metazoa) constituyen un reino que reúne un amplio grupo de organismos que son eucariotas, heterótrofos, pluricelulares y tisulares (excepto los poríferos). Se caracterizan por su amplia capacidad de movimiento, por no tener cloroplasto (aunque hay excepciones, como en el caso de Elysia chlorotica) ni pared celular, y por su desarrollo embrionario; que atraviesa una fase de blástula y determina un plan corporal fijo (aunque muchas especies pueden sufrir una metamorfosis posterior como los artrópodos). Los animales forman un grupo natural estrechamente emparentado con los hongos (reino Fungi). Animalia es uno de los cinco reinos del dominio Eukaryota, y a él pertenece el ser humano. La parte de la biología que estudia los animales es la zoología.",
      id: 1
    },
    {
      autor: "Royel Kim",
      frase: "El amor puro y sincero no necesita palabras",
      img: "assets/img/A-2.jpg",
      aparicion: "1939-05-01",
      casa:"zoologico",
      update:"actualizado hace 2 mins",
      detail:"En la clasificación científica de los seres vivos, los animales (Animalia) o metazoos (Metazoa) constituyen un reino que reúne un amplio grupo de organismos que son eucariotas, heterótrofos, pluricelulares y tisulares (excepto los poríferos). Se caracterizan por su amplia capacidad de movimiento, por no tener cloroplasto (aunque hay excepciones, como en el caso de Elysia chlorotica) ni pared celular, y por su desarrollo embrionario; que atraviesa una fase de blástula y determina un plan corporal fijo (aunque muchas especies pueden sufrir una metamorfosis posterior como los artrópodos). Los animales forman un grupo natural estrechamente emparentado con los hongos (reino Fungi). Animalia es uno de los cinco reinos del dominio Eukaryota, y a él pertenece el ser humano. La parte de la biología que estudia los animales es la zoología.",
      id: 2
    },
    {
      autor: "Jose Kill",
      frase: "Si el amor tuviera un sonido sería el ronroneo",
      img: "assets/img/A-3.jpg",
      aparicion: "1964-01-01",
      casa: "zoo",
      update:"actualizado hace 3 horas",
      detail:"En la clasificación científica de los seres vivos, los animales (Animalia) o metazoos (Metazoa) constituyen un reino que reúne un amplio grupo de organismos que son eucariotas, heterótrofos, pluricelulares y tisulares (excepto los poríferos). Se caracterizan por su amplia capacidad de movimiento, por no tener cloroplasto (aunque hay excepciones, como en el caso de Elysia chlorotica) ni pared celular, y por su desarrollo embrionario; que atraviesa una fase de blástula y determina un plan corporal fijo (aunque muchas especies pueden sufrir una metamorfosis posterior como los artrópodos). Los animales forman un grupo natural estrechamente emparentado con los hongos (reino Fungi). Animalia es uno de los cinco reinos del dominio Eukaryota, y a él pertenece el ser humano. La parte de la biología que estudia los animales es la zoología.",
      id: 3
    },
    {
      autor: "Richard Colman",
      frase: "Ni todo el oro del mundo es comparable al amor que te da un animal",
      img: "assets/img/A-4.jpg",
      aparicion: "1962-05-01",
      casa:"zoologico",
      update:"actualizado hace 5  horas",
      detail:"En la clasificación científica de los seres vivos, los animales (Animalia) o metazoos (Metazoa) constituyen un reino que reúne un amplio grupo de organismos que son eucariotas, heterótrofos, pluricelulares y tisulares (excepto los poríferos). Se caracterizan por su amplia capacidad de movimiento, por no tener cloroplasto (aunque hay excepciones, como en el caso de Elysia chlorotica) ni pared celular, y por su desarrollo embrionario; que atraviesa una fase de blástula y determina un plan corporal fijo (aunque muchas especies pueden sufrir una metamorfosis posterior como los artrópodos). Los animales forman un grupo natural estrechamente emparentado con los hongos (reino Fungi). Animalia es uno de los cinco reinos del dominio Eukaryota, y a él pertenece el ser humano. La parte de la biología que estudia los animales es la zoología.",
      id: 4
    },
    {
      autor: "Fred Wande",
      frase: "No sabemos nada realmente del amor si no queremos a los animales",
      img: "assets/img/A-5.jpg",
      aparicion: "1940-06-01",
      casa: "zoo",
      update:"actualizado hace 3 mins",
      detail:"En la clasificación científica de los seres vivos, los animales (Animalia) o metazoos (Metazoa) constituyen un reino que reúne un amplio grupo de organismos que son eucariotas, heterótrofos, pluricelulares y tisulares (excepto los poríferos). Se caracterizan por su amplia capacidad de movimiento, por no tener cloroplasto (aunque hay excepciones, como en el caso de Elysia chlorotica) ni pared celular, y por su desarrollo embrionario; que atraviesa una fase de blástula y determina un plan corporal fijo (aunque muchas especies pueden sufrir una metamorfosis posterior como los artrópodos). Los animales forman un grupo natural estrechamente emparentado con los hongos (reino Fungi). Animalia es uno de los cinco reinos del dominio Eukaryota, y a él pertenece el ser humano. La parte de la biología que estudia los animales es la zoología.",
      id: 5
    },
    {
      autor: "Charles Darwin",
      frase: "La gente que realmente aprecia a los animales siempre pregunta sus nombres",
      img: "assets/img/A-6.jpg",
      aparicion: "1962-08-01",
      casa: "zoologico",
      update:"actualizado hace 5 mins",
      detail:"En la clasificación científica de los seres vivos, los animales (Animalia) o metazoos (Metazoa) constituyen un reino que reúne un amplio grupo de organismos que son eucariotas, heterótrofos, pluricelulares y tisulares (excepto los poríferos). Se caracterizan por su amplia capacidad de movimiento, por no tener cloroplasto (aunque hay excepciones, como en el caso de Elysia chlorotica) ni pared celular, y por su desarrollo embrionario; que atraviesa una fase de blástula y determina un plan corporal fijo (aunque muchas especies pueden sufrir una metamorfosis posterior como los artrópodos). Los animales forman un grupo natural estrechamente emparentado con los hongos (reino Fungi). Animalia es uno de los cinco reinos del dominio Eukaryota, y a él pertenece el ser humano. La parte de la biología que estudia los animales es la zoología.",
      id: 6
    },
    {
      autor: "Abraham Lincoln",
      frase: "Estoy a favor del derecho de los animales, al igual que del derecho de los humanos. Ese es el camino de un ser humano completo",
      img: "assets/img/A-7.jpg",
      aparicion: "1974-11-01",
      casa: "zoo",
      update:"actualizado hace 20 mins",
      detail:"En la clasificación científica de los seres vivos, los animales (Animalia) o metazoos (Metazoa) constituyen un reino que reúne un amplio grupo de organismos que son eucariotas, heterótrofos, pluricelulares y tisulares (excepto los poríferos). Se caracterizan por su amplia capacidad de movimiento, por no tener cloroplasto (aunque hay excepciones, como en el caso de Elysia chlorotica) ni pared celular, y por su desarrollo embrionario; que atraviesa una fase de blástula y determina un plan corporal fijo (aunque muchas especies pueden sufrir una metamorfosis posterior como los artrópodos). Los animales forman un grupo natural estrechamente emparentado con los hongos (reino Fungi). Animalia es uno de los cinco reinos del dominio Eukaryota, y a él pertenece el ser humano. La parte de la biología que estudia los animales es la zoología.",
      id: 7
    },
    {
      autor: "Holder Milano",
      frase: "El amor por todas las criaturas vivientes es el más noble atributo del ser humano",
      img: "assets/img/A-8.jpg",
      aparicion: "1958-05-01",
      casa: "zoologico",
      update:"actualizado hace 50 mins",
      detail:"En la clasificación científica de los seres vivos, los animales (Animalia) o metazoos (Metazoa) constituyen un reino que reúne un amplio grupo de organismos que son eucariotas, heterótrofos, pluricelulares y tisulares (excepto los poríferos). Se caracterizan por su amplia capacidad de movimiento, por no tener cloroplasto (aunque hay excepciones, como en el caso de Elysia chlorotica) ni pared celular, y por su desarrollo embrionario; que atraviesa una fase de blástula y determina un plan corporal fijo (aunque muchas especies pueden sufrir una metamorfosis posterior como los artrópodos). Los animales forman un grupo natural estrechamente emparentado con los hongos (reino Fungi). Animalia es uno de los cinco reinos del dominio Eukaryota, y a él pertenece el ser humano. La parte de la biología que estudia los animales es la zoología.",
      id: 8
    },
    {
      autor: "Renato Loz",
      frase: "Los animales nacen como son, lo aceptan y eso es todo. Viven con mayor paz que las personas",
      img: "assets/img/A-9.jpg",
      aparicion: "1945-07-21",
      casa: "zoo",
      update:"actualizado hace 13 mins",
      detail:"En la clasificación científica de los seres vivos, los animales (Animalia) o metazoos (Metazoa) constituyen un reino que reúne un amplio grupo de organismos que son eucariotas, heterótrofos, pluricelulares y tisulares (excepto los poríferos). Se caracterizan por su amplia capacidad de movimiento, por no tener cloroplasto (aunque hay excepciones, como en el caso de Elysia chlorotica) ni pared celular, y por su desarrollo embrionario; que atraviesa una fase de blástula y determina un plan corporal fijo (aunque muchas especies pueden sufrir una metamorfosis posterior como los artrópodos). Los animales forman un grupo natural estrechamente emparentado con los hongos (reino Fungi). Animalia es uno de los cinco reinos del dominio Eukaryota, y a él pertenece el ser humano. La parte de la biología que estudia los animales es la zoología.",
      id: 9
    }
  ];

  constructor() {console.log("servicio funcionando")}

  getIces():any[]{
      return this.ices; }


  getIce(id:number){

       return this.ices[id];
     }

     buscarIce( termino: string){

     let  icesArr:Ice[] = [];

     termino = termino.toLowerCase();

     for( let i=0; i < this.ices.length; i++ ){

      let ice = this.ices[i];

       let nombre = ice.autor.toLocaleLowerCase();

       if(nombre.indexOf(termino) >= 0 ){
         ice.id = i;
        icesArr.push(ice)
       }
     }
     return icesArr;
     }

     getTermino( termino: number ){
        return this.ices[termino];
     }
}




export interface Ice{
  autor: string;
  frase: string;
  img: string;
  aparicion:string;
  casa: string;
  update:string;
  detail: string;
  id:number;
}



