import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

import { SharedService } from './../../services/shared.service';
import { Observable } from "rxjs";


@Injectable()
export class AuthGuard implements CanActivate {

    public shared: SharedService;

    constructor(private router: Router) {
        this.shared = SharedService.getInstance();
    };

    canActivate(
        router: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {

        if (this.shared.isLogged()) {
            return true
        }
        this.router.navigate(['/login']);
        return false;
    }
}