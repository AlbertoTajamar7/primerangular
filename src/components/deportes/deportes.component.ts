import { Component } from "@angular/core";
@Component({
    selector:"app-deportes",
    templateUrl: "./deportes.component.html"
})
export class DeportesComponent{
    public sports: Array<string>;
    public numeros: Array<number>
    constructor(){
        this.numeros =[34,5,4,6,43,7,54];
        this.sports = ["Canicas","Padel","Petanca","Curling","futbol","pin pon","beisbol"]
    }
}