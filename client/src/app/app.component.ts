import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { IPagination } from './models/pagination';
import { IProduct } from './models/product';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'SkiNet';
    public products: IProduct[] = [];

    constructor(private readonly httpClient: HttpClient) {

    }

    ngOnInit(): void {
        this.httpClient.get('https://localhost:5001/api/products?pageSize=50').subscribe((response: any) => {
            var pagination = response as IPagination;
            this.products = pagination.data;
        });
    }
}
