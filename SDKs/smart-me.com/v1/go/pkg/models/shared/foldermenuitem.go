package shared




type FolderMenuItemFolderTypeEnum string

const (
    FolderMenuItemFolderTypeEnumFolder FolderMenuItemFolderTypeEnum = "Folder"
FolderMenuItemFolderTypeEnumLocation FolderMenuItemFolderTypeEnum = "Location"
FolderMenuItemFolderTypeEnumFactory FolderMenuItemFolderTypeEnum = "Factory"
FolderMenuItemFolderTypeEnumHouse FolderMenuItemFolderTypeEnum = "House"
FolderMenuItemFolderTypeEnumOffice FolderMenuItemFolderTypeEnum = "Office"
FolderMenuItemFolderTypeEnumMachine FolderMenuItemFolderTypeEnum = "Machine"
FolderMenuItemFolderTypeEnumVirtualMeter FolderMenuItemFolderTypeEnum = "VirtualMeter"
FolderMenuItemFolderTypeEnumElecticityFolder FolderMenuItemFolderTypeEnum = "ElecticityFolder"
FolderMenuItemFolderTypeEnumWaterFolder FolderMenuItemFolderTypeEnum = "WaterFolder"
FolderMenuItemFolderTypeEnumHeatFolder FolderMenuItemFolderTypeEnum = "HeatFolder"
FolderMenuItemFolderTypeEnumGasFolder FolderMenuItemFolderTypeEnum = "GasFolder"
FolderMenuItemFolderTypeEnumTemperatureFolder FolderMenuItemFolderTypeEnum = "TemperatureFolder"
FolderMenuItemFolderTypeEnumSun FolderMenuItemFolderTypeEnum = "Sun"
FolderMenuItemFolderTypeEnumLight FolderMenuItemFolderTypeEnum = "Light"
FolderMenuItemFolderTypeEnumIce FolderMenuItemFolderTypeEnum = "Ice"
FolderMenuItemFolderTypeEnumSofa FolderMenuItemFolderTypeEnum = "Sofa"
FolderMenuItemFolderTypeEnumFood FolderMenuItemFolderTypeEnum = "Food"
FolderMenuItemFolderTypeEnumCoffee FolderMenuItemFolderTypeEnum = "Coffee"
FolderMenuItemFolderTypeEnumCar FolderMenuItemFolderTypeEnum = "Car"
FolderMenuItemFolderTypeEnumChargingStation FolderMenuItemFolderTypeEnum = "ChargingStation"
FolderMenuItemFolderTypeEnumMeter FolderMenuItemFolderTypeEnum = "Meter"
FolderMenuItemFolderTypeEnumUser FolderMenuItemFolderTypeEnum = "User"
FolderMenuItemFolderTypeEnumTrash FolderMenuItemFolderTypeEnum = "Trash"
FolderMenuItemFolderTypeEnumGridPhotovoltaicPowerSystem FolderMenuItemFolderTypeEnum = "GridPhotovoltaicPowerSystem"
)


type FolderMenuItem struct {
    AutoExportSettings *AutoExportSettings `json:"AutoExportSettings,omitempty"`
    Children []FolderMenuItem `json:"Children,omitempty"`
    Description *string `json:"Description,omitempty"`
    FolderType *FolderMenuItemFolderTypeEnum `json:"FolderType,omitempty"`
    Icon *string `json:"Icon,omitempty"`
    ID *string `json:"Id,omitempty"`
    MeterSerialNumber *string `json:"MeterSerialNumber,omitempty"`
    Name *string `json:"Name,omitempty"`
    UserID *string `json:"UserId,omitempty"`
    
}

