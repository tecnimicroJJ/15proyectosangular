import { LoginComponent } from './login/containers/login.component';
import { NgModule } from "@angular/core";
import { SharedModule } from "../core/shared/shared.module";

@NgModule({
    imports:[
        SharedModule
    ],
    declarations:[
        LoginComponent
    ],
    exports:[],
    providers:[]
})

export class PublicModule{
    constructor(){}
}