import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgModule} from '@angular/core';


@NgModule({
    imports:[
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations:[],
    exports:[
        FormsModule,
        ReactiveFormsModule //para perimtir que los demas componentes tenga acceso a estos modulos
    ],
    providers:[]
})

export class SharedModule{
    constructor(){}
}