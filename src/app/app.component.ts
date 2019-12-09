import { Component } from '@angular/core';
import * as layoutActions from './core/actions/layout';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as reducers from './core/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-app';
  isLoading$: Observable<boolean>;

  constructor(
    public store$: Store<any>,
    private router: Router,
  ) {
    this.isLoading$ = this.store$.pipe(select(reducers.getLayoutIsLoading));

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  private navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.store$.dispatch(new layoutActions.ShowSpinnerAction());
    }

    if (event instanceof NavigationEnd) {
      this.store$.dispatch(new layoutActions.HideSpinnerAction());
    }

    if (event instanceof NavigationCancel) {
      this.store$.dispatch(new layoutActions.HideSpinnerAction());
    }

    if (event instanceof NavigationError) {
      this.store$.dispatch(new layoutActions.HideSpinnerAction());
    }
  }

}
