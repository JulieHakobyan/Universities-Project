import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {UniversitiesModule} from "./universities/universities.module";
import {SearchPageComponent} from "./universities/components/search-page/search-page.component";

const routes: Routes = [
    {
        path: '',
        component: SearchPageComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        UniversitiesModule,
        RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}

