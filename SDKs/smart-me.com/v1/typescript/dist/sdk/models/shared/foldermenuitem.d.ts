import { SpeakeasyBase } from "../../../internal/utils";
import { AutoExportSettings } from "./autoexportsettings";
export declare enum FolderMenuItemFolderTypeEnum {
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
/**
 * A folder menu item
**/
export declare class FolderMenuItem extends SpeakeasyBase {
    autoExportSettings?: AutoExportSettings;
    children?: FolderMenuItem[];
    description?: string;
    folderType?: FolderMenuItemFolderTypeEnum;
    icon?: string;
    id?: string;
    meterSerialNumber?: string;
    name?: string;
    userId?: string;
}
