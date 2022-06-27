import { Injectable } from '@angular/core';
// import of from angular
import { of, Observable } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Injectable({
  providedIn: 'root'
})
export class ProvideDataService {

  constructor() { }


    // write a function to return the data from ELEMENT_DATA using angular of methode to return an observable
    getData(): Observable<PeriodicElement[]> {
      return of(ELEMENT_DATA);
    }
  
    // add a description to the function propertyNames
    /* 
      This function returns an array of strings which are the property names of the ELEMENT_DATA array.
      The array is created by using the Object.keys() method.
      The array is then filtered to remove the 'position' property from the array.
     */
    propertyNames = () => {
      let propertyNames = [];
      for (let i = 0; i < ELEMENT_DATA.length; i++) {
        propertyNames.push(Object.keys(ELEMENT_DATA[i]));
      }
      return propertyNames[0];
    }
  
    
    // write a function which returns propertyNames function as an Observable
    /* add a descrption of the funcion
    */
    getDataPropertyNames(): Observable<string[]> {
      return of(this.propertyNames());
    }
  
}


