import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoExportSettings } from "./autoexportsettings";


export enum FolderMenuItemFolderTypeEnum {
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


// FolderMenuItem
/** 
 * A folder menu item
**/
export class FolderMenuItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoExportSettings" })
  autoExportSettings?: AutoExportSettings;

  @SpeakeasyMetadata({ data: "json, name=Children", elemType: FolderMenuItem })
  children?: FolderMenuItem[];

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=FolderType" })
  folderType?: FolderMenuItemFolderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Icon" })
  icon?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=MeterSerialNumber" })
  meterSerialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: string;
}
