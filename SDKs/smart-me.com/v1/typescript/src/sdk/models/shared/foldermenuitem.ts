import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoExportSettings } from "./autoexportsettings";
import { FolderMenuItem } from "./foldermenuitem";

export enum FolderMenuItemFolderTypeEnum {
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


// FolderMenuItem
/** 
 * A folder menu item
**/
export class FolderMenuItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoExportSettings" })
  autoExportSettings?: AutoExportSettings;

  @Metadata({ data: "json, name=Children", elemType: shared.FolderMenuItem })
  children?: FolderMenuItem[];

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=FolderType" })
  folderType?: FolderMenuItemFolderTypeEnum;

  @Metadata({ data: "json, name=Icon" })
  icon?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=MeterSerialNumber" })
  meterSerialNumber?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=UserId" })
  userId?: string;
}
