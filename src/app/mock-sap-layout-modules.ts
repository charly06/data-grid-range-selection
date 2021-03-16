import {SapLayoutModule, SapLayoutModuleStructure} from './sap-layout-module';
import {SapLayoutModuleType} from './sap-layout-module-type.enum';
import {Region} from './region.enum';

const O_LAYOUT_MODULES_OG: SapLayoutModule[] = [
  {
    layoutModuleType: SapLayoutModuleType.O_MODULE_OG,
    sapLayoutModuleId: 'O66020.ZN00',
    sapLayoutModuleName: 'ESP1',
    assignedSapSalesChannel: 40,
    assignedSapSalesChannelLabel: 'VT 40',
    assignableRegions: [
      Region.ZN01,
      Region.ZN02,
      Region.ZN03,
      Region.ZN04,
      Region.ZN05,
      Region.ZN06,
    ]
  },
  {
    layoutModuleType: SapLayoutModuleType.O_MODULE_OG,
    sapLayoutModuleId: 'O67020.ZN00',
    sapLayoutModuleName: 'ISP1',
    assignedSapSalesChannel: 60,
    assignedSapSalesChannelLabel: 'VT 60',
    assignableRegions: [
      Region.ZN01,
      Region.ZN02,
      Region.ZN03,
      Region.ZN04,
      Region.ZN05,
      Region.ZN06,
    ]
  },
  {
    layoutModuleType: SapLayoutModuleType.O_MODULE_OG,
    sapLayoutModuleId: 'O67021.ZN00',
    sapLayoutModuleName: 'ISP2',
    assignedSapSalesChannel: 63,
    assignedSapSalesChannelLabel: 'VT 63',
    assignableRegions: [
      Region.ZN01,
      Region.ZN02,
      Region.ZN03,
      Region.ZN04,
      Region.ZN05,
      Region.ZN06,
    ]
  },
  {
    layoutModuleType: SapLayoutModuleType.O_MODULE_OG,
    sapLayoutModuleId: 'O67022.ZN00',
    sapLayoutModuleName: 'ISP3',
    assignedSapSalesChannel: 66,
    assignedSapSalesChannelLabel: 'VT 66',
    assignableRegions: [
      Region.ZN01,
      Region.ZN02,
      Region.ZN03,
      Region.ZN04,
      Region.ZN05,
      Region.ZN06,
    ]
  }
];

export const O_LAYOUT_MODULE_OG_STRUCTURE: SapLayoutModuleStructure =  {
  allowedRegions: [
    Region.ZN01,
    Region.ZN02,
    Region.ZN03,
    Region.ZN04,
    Region.ZN05,
    Region.ZN06,
  ],
  allowedSapLayoutModules: O_LAYOUT_MODULES_OG,
};
