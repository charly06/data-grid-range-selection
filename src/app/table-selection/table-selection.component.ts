import {Component, OnInit} from '@angular/core';

import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource} from '@angular/material/table';

import {ListingRow, SapLayoutModuleStructure} from '../sap-layout-module';
import { SapLayoutModuleService } from '../sap-layout-module.service';
import {Region} from '../region.enum';

@Component({
  selector: 'app-table-selection',
  templateUrl: './table-selection.component.html',
  styleUrls: ['./table-selection.component.css']
})
export class TableSelectionComponent implements OnInit {

  sapLayoutModuleStructure: SapLayoutModuleStructure;
  columnNames: string[];
  listingRows: ListingRow[] = [];
  dataSource: MatTableDataSource<ListingRow>;
  selection = new SelectionModel<ListingRow>(true, []);

  constructor(private sapLayoutModuleService: SapLayoutModuleService) { }

  ngOnInit(): void {
    this.getSapLayoutModuleStructure();
    this.getAllListingColumnNames();
    this.getTableDataFromSapLayoutModuleStructure();
    console.log(this.sapLayoutModuleStructure);
    console.log(this.columnNames);
    console.log(this.listingRows);
    this.initializeTable();
  }

  getSapLayoutModuleStructure(): void {
    this.sapLayoutModuleService.getSapLayoutModuleStructureForWsProcurementArticle(1234)
      .subscribe(sapLayoutModuleStructure => this.sapLayoutModuleStructure = sapLayoutModuleStructure);
  }

  getAllListingColumnNames(): void {
    this.columnNames = [];
    this.columnNames.push('Baustein', 'Vertriebstyp');
    const allowedRegionStrings = this.sapLayoutModuleStructure ?
      this.sapLayoutModuleStructure.allowedRegions.map(region => Region[region] ) : [];
    this.columnNames.push(...allowedRegionStrings);
  }

  getTableDataFromSapLayoutModuleStructure(): void {
    let listingRow = {};

    const allowedRegionsForListingRow = this.sapLayoutModuleStructure.allowedRegions
      .map(region => Region[region] )
      .reduce((map, obj) => (map[obj.valueOf()] = obj.valueOf(), map), {});

    this.sapLayoutModuleStructure.allowedSapLayoutModules.forEach(sapLayoutModule => {
        listingRow = {
          ...{
            Baustein: sapLayoutModule.sapLayoutModuleId,
            Vertriebstyp: sapLayoutModule.assignedSapSalesChannelLabel,
          },
          ...allowedRegionsForListingRow
        };
        this.listingRows.push(listingRow);
      }
    );
  }

  initializeTable(): void {
    this.dataSource = new MatTableDataSource<ListingRow>(this.listingRows);
  }

  onRangeChanged(range): void {
    console.log(range);
  }

}
