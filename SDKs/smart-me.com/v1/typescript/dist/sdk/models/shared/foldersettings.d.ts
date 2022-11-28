import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FolderSettingsFolderTypeEnum {
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
 * Container for the folder settings
**/
export declare class FolderSettings extends SpeakeasyBase {
    description?: string;
    enable?: boolean;
    folderType?: FolderSettingsFolderTypeEnum;
    name?: string;
    parentFolderId?: string;
    serialNumber?: number;
    useableForVirtualBillingMeters?: boolean;
    valueCorrection?: number;
    valueCorrectionParentFolder?: number;
    visualizationName?: string;
}
