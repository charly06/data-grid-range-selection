import { SapLayoutModuleType } from './sap-layout-module-type.enum';
import {Region} from './region.enum';

export interface SapLayoutModule {
  layoutModuleType: SapLayoutModuleType;
  sapLayoutModuleId: string;
  sapLayoutModuleName: string;
  assignedSapSalesChannel: number;
  assignedSapSalesChannelLabel: string;
  assignableRegions: Region[];
}

export interface SapLayoutModuleStructure {
  allowedRegions: Region[];
  allowedSapLayoutModules: SapLayoutModule[];
}

export interface ListingRow {
  [key: string]: string;
}

export interface Listing {
  region: Region;
  sapLayoutModuleId: string;
}
