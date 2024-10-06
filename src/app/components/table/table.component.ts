import { Component, OnInit } from '@angular/core';
import {
  ColDef,
  GridReadyEvent,
  SelectionChangedEvent,
} from 'ag-grid-community';
import data from 'src/assets/data.json';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  rowData: any[] = [];
  columnDefs: ColDef[] = [];

  gridApi: any;
  gridColumnApi: any;
  selectedRows: any[] = [];

  // Default column definition for all columns in the grid
  defaultColDef: ColDef = {
    sortable: true, // Enable sorting for all columns
    filter: true, // Enable filtering for all columns
    // floatingFilter: true, // Enable floating filter for all columns
    resizable: true, // Enable resizing for all columns
    // editable: true,
  };

  constructor() {}

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    console.log('Grid ready:', this.gridApi, this.gridColumnApi);
  }

  onSelectionChanged(event: SelectionChangedEvent) {
    console.log('Selection changed event:', event);
    this.selectedRows = event.api.getSelectedNodes();
    // console.log('Selection changed:', this.selectedRows);
    console.log(
      'Selected rows Data:',
      this.selectedRows.map((row) => row.data)
    );
  }

  ngOnInit(): void {
    this.rowData = data;
    console.log('Row data:', this.rowData);

    this.columnDefs = [
      { field: 'id', headerName: 'ID', flex: 1, checkboxSelection: true },
      { field: 'ruleName', headerName: 'Rule Name', flex: 1 },
      { field: 'active', headerName: 'Status', flex: 1 },
      { field: 'type', headerName: 'Type', flex: 1 },
      { field: 'subType', headerName: 'Sub-Type', flex: 2 },
      { field: 'domain', headerName: 'Domain', flex: 0.8 },
      { field: 'impacted', headerName: 'Impacted', flex: 1 },
      { field: 'favourite', headerName: 'Favorite', flex: 1 },
      { field: 'scheduled', headerName: 'Scheduled', flex: 1 },
      {
        field: 'lastScheduledDate',
        headerName: 'Last Scheduled Date',
        flex: 1,
      },
      { field: 'alert', headerName: 'Alert', flex: 1 },
    ];
  }
}
