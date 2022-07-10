import { Component, OnInit } from '@angular/core';
import { faHeart, faShoppingCart, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    constructor() {
        this.faShoppingCart = faShoppingCart;
    }

    public faShoppingCart: IconDefinition;

    ngOnInit(): void {

    }

}
