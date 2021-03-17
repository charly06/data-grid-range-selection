import {Component, OnInit, ViewChild} from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import { SelectContainerComponent } from 'ngx-drag-to-select';

import {Listing} from '../sap-layout-module';
import {Region} from '../region.enum';

const LISTING_OPTIONS: Listing[] = [
  {region: Region.ZN01, sapLayoutModuleId: 'O67010.ZN00'},
  {region: Region.ZN02, sapLayoutModuleId: 'O67010.ZN00'},
  {region: Region.ZN03, sapLayoutModuleId: 'O67010.ZN00'},
  {region: Region.ZN04, sapLayoutModuleId: 'O67010.ZN00'},
  {region: Region.ZN05, sapLayoutModuleId: 'O67010.ZN00'},
  {region: Region.ZN06, sapLayoutModuleId: 'O67010.ZN00'},
  {region: Region.ZN01, sapLayoutModuleId: 'O67020.ZN00'},
  {region: Region.ZN02, sapLayoutModuleId: 'O67020.ZN00'},
  {region: Region.ZN03, sapLayoutModuleId: 'O67020.ZN00'},
  {region: Region.ZN04, sapLayoutModuleId: 'O67020.ZN00'},
  {region: Region.ZN05, sapLayoutModuleId: 'O67020.ZN00'},
  {region: Region.ZN06, sapLayoutModuleId: 'O67020.ZN00'},
  {region: Region.ZN01, sapLayoutModuleId: 'O67021.ZN00'},
  {region: Region.ZN02, sapLayoutModuleId: 'O67021.ZN00'},
  {region: Region.ZN03, sapLayoutModuleId: 'O67021.ZN00'},
  {region: Region.ZN04, sapLayoutModuleId: 'O67021.ZN00'},
  {region: Region.ZN05, sapLayoutModuleId: 'O67021.ZN00'},
  {region: Region.ZN06, sapLayoutModuleId: 'O67021.ZN00'},
  {region: Region.ZN01, sapLayoutModuleId: 'O67030.ZN00'},
  {region: Region.ZN02, sapLayoutModuleId: 'O67030.ZN00'},
  {region: Region.ZN03, sapLayoutModuleId: 'O67030.ZN00'},
  {region: Region.ZN04, sapLayoutModuleId: 'O67030.ZN00'},
  {region: Region.ZN05, sapLayoutModuleId: 'O67030.ZN00'},
  {region: Region.ZN06, sapLayoutModuleId: 'O67030.ZN00'},
];

@Component({
  selector: 'app-listing-table',
  templateUrl: './listing-table.component.html',
  styleUrls: ['./listing-table.component.css']
})
export class ListingTableComponent implements OnInit {

  @ViewChild('mainListing')
  mainListingContainer: SelectContainerComponent;

  listingOptions: Listing[] = LISTING_OPTIONS;
  selectedListingOptions: Listing[] = [];
  selectedListingOptionsSimpleToggle = new SelectionModel<Listing>(true, [], true);

  constructor() { }

  ngOnInit(): void {
  }

}
