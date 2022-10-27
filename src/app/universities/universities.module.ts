import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchPageComponent} from "./components/search-page/search-page.component";
import {UniversitiesGridComponent} from "./components/universities-grid/universities-grid.component";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
    declarations: [
        SearchPageComponent,
        UniversitiesGridComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
    ]
})
export class UniversitiesModule {
}
