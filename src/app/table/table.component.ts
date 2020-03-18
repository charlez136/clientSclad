import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {

  @Input() public data: any;
  @Input() public name: any;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  private timerSubscription: Subscription;

  constructor() { }

  public ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    console.log(`init: tab ${this.name}`);
    this.timerSubscription = timer(1000, 2000).subscribe(val => console.log(val));
  }

  public ngOnDestroy() {
    console.log(`destroy: tab ${this.name}`);
    this.timerSubscription.unsubscribe();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
