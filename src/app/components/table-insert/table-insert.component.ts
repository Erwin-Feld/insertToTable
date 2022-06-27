import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table-insert',
  templateUrl: './table-insert.component.html',
  styleUrls: ['./table-insert.component.scss']
})
export class TableInsertComponent implements OnInit {

  @Input() tableData$!: Observable<PeriodicElement[]>;
  /* give tableData$ datatype Observable of type PEriodic ELement */
  /* give tableColumnNames$ datatype Observable of type TableColumns */



  @Input() tableColumnNames$!: Observable<any>; 

  expandedElement!: PeriodicElement | null; 



  /* write fucntions that returns data from observable using subscribe */
    getData():void{
      this.tableData$.subscribe(data => {
        console.log('data: ', data);
      }
      );
    }
    

  constructor() { }

  ngOnInit(): void {
  }

}
