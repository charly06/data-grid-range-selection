import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import {SapLayoutModuleStructure} from './sap-layout-module';
import {O_LAYOUT_MODULE_OG_STRUCTURE} from './mock-sap-layout-modules';

@Injectable({
  providedIn: 'root'
})
export class SapLayoutModuleService {

  constructor() { }

  getSapLayoutModuleStructureForWsProcurementArticle(wsProcurementArticleId: number): Observable<SapLayoutModuleStructure> {
    const layoutModuleStructure = of(O_LAYOUT_MODULE_OG_STRUCTURE);
    return layoutModuleStructure;
  }

}
