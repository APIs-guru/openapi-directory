import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FolderSettingsFolderTypeEnum {
    Folder = "Folder",
    Location = "Location",
    Factory = "Factory",
    House = "House",
    Office = "Office",
    Machine = "Machine",
    VirtualMeter = "VirtualMeter",
    ElecticityFolder = "ElecticityFolder",
    WaterFolder = "WaterFolder",
    HeatFolder = "HeatFolder",
    GasFolder = "GasFolder",
    TemperatureFolder = "TemperatureFolder",
    Sun = "Sun",
    Light = "Light",
    Ice = "Ice",
    Sofa = "Sofa",
    Food = "Food",
    Coffee = "Coffee",
    Car = "Car",
    ChargingStation = "ChargingStation",
    Meter = "Meter",
    User = "User",
    Trash = "Trash",
    GridPhotovoltaicPowerSystem = "GridPhotovoltaicPowerSystem"
}


// FolderSettings
/** 
 * Container for the folder settings
**/
export class FolderSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Enable, form, name=Enable;" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=FolderType, form, name=FolderType;" })
  folderType?: FolderSettingsFolderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentFolderId, form, name=ParentFolderId;" })
  parentFolderId?: string;

  @SpeakeasyMetadata({ data: "json, name=SerialNumber, form, name=SerialNumber;" })
  serialNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=UseableForVirtualBillingMeters, form, name=UseableForVirtualBillingMeters;" })
  useableForVirtualBillingMeters?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ValueCorrection, form, name=ValueCorrection;" })
  valueCorrection?: number;

  @SpeakeasyMetadata({ data: "json, name=ValueCorrectionParentFolder, form, name=ValueCorrectionParentFolder;" })
  valueCorrectionParentFolder?: number;

  @SpeakeasyMetadata({ data: "json, name=VisualizationName, form, name=VisualizationName;" })
  visualizationName?: string;
}
