import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FolderSettingsFolderTypeEnum {
    Folder = "Folder"
,    Location = "Location"
,    Factory = "Factory"
,    House = "House"
,    Office = "Office"
,    Machine = "Machine"
,    VirtualMeter = "VirtualMeter"
,    ElecticityFolder = "ElecticityFolder"
,    WaterFolder = "WaterFolder"
,    HeatFolder = "HeatFolder"
,    GasFolder = "GasFolder"
,    TemperatureFolder = "TemperatureFolder"
,    Sun = "Sun"
,    Light = "Light"
,    Ice = "Ice"
,    Sofa = "Sofa"
,    Food = "Food"
,    Coffee = "Coffee"
,    Car = "Car"
,    ChargingStation = "ChargingStation"
,    Meter = "Meter"
,    User = "User"
,    Trash = "Trash"
,    GridPhotovoltaicPowerSystem = "GridPhotovoltaicPowerSystem"
}


// FolderSettings
/** 
 * Container for the folder settings
**/
export class FolderSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description, form, name=Description;" })
  description?: string;

  @Metadata({ data: "json, name=Enable, form, name=Enable;" })
  enable?: boolean;

  @Metadata({ data: "json, name=FolderType, form, name=FolderType;" })
  folderType?: FolderSettingsFolderTypeEnum;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;

  @Metadata({ data: "json, name=ParentFolderId, form, name=ParentFolderId;" })
  parentFolderId?: string;

  @Metadata({ data: "json, name=SerialNumber, form, name=SerialNumber;" })
  serialNumber?: number;

  @Metadata({ data: "json, name=UseableForVirtualBillingMeters, form, name=UseableForVirtualBillingMeters;" })
  useableForVirtualBillingMeters?: boolean;

  @Metadata({ data: "json, name=ValueCorrection, form, name=ValueCorrection;" })
  valueCorrection?: number;

  @Metadata({ data: "json, name=ValueCorrectionParentFolder, form, name=ValueCorrectionParentFolder;" })
  valueCorrectionParentFolder?: number;

  @Metadata({ data: "json, name=VisualizationName, form, name=VisualizationName;" })
  visualizationName?: string;
}
