import { Component, OnInit } from '@angular/core';
import { ProvideDataService } from 'src/app/services/provide-data.service';

@Component({
  selector: 'app-root-table',
  templateUrl: './root-table.component.html',
  styleUrls: ['./root-table.component.scss']
})
export class RootTableComponent implements OnInit {

  tableData$ = this.provideDataService.getData();

  tableColumnNames$ = this.provideDataService.getDataPropertyNames();


  constructor(private provideDataService: ProvideDataService) { }


  ngOnInit(): void {
  }

}
