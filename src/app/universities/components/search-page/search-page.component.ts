import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {HttpService} from "../../common/services/auth-http.service";

@Component({
    selector: 'search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {

    formGroup: FormGroup;
    loadGrid: boolean;
    isLoading: boolean;
    dataSource: Record<string, any>;

    constructor(
        private formBuilder: FormBuilder,
        private httpService: HttpService,
    ) {
    }

    ngOnInit() {
        this.initForm();
    }

    search(): void {
        this.formGroup.get('name')?.value
            ? this.getUniversities({name: this.formGroup.get('name')?.value})
            : this.getUniversities();
        this.isLoading = true;
    }

    private initForm(): void {
        this.formGroup = this.formBuilder.group({
            name: [void 0],
        });
    }

    /**
     * Retrieve universities data
     * @param params
     */
    private getUniversities(params?: Record<string, string>): void {
        this.httpService.requestUniversities(params)
            .subscribe((data: any) => {
                    this.isLoading = false;
                    this.dataSource = new MatTableDataSource(data);
                    this.loadGrid = true;
                }
            );
    }
}
