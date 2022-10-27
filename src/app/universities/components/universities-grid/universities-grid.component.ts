import {AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
    selector: 'universities-grid',
    templateUrl: './universities-grid.component.html',
    styleUrls: ['./universities-grid.component.scss'],
})

export class UniversitiesGridComponent implements AfterViewInit, OnChanges {

    displayedColumns: string[] = ['name', 'country', 'domains', 'web_pages'];
    firstLastButtons = true;

    @Input() dataSource: Record<string, any> | any;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    /**
     * Set the sort and paginator after the view init since this component will
     * be able to query its view for the initialized sort and paginator.
     */
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    ngOnChanges(changes: SimpleChanges) {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
}

