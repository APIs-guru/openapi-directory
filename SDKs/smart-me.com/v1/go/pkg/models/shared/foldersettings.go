package shared




type FolderSettingsFolderTypeEnum string

const (
    FolderSettingsFolderTypeEnumFolder FolderSettingsFolderTypeEnum = "Folder"
FolderSettingsFolderTypeEnumLocation FolderSettingsFolderTypeEnum = "Location"
FolderSettingsFolderTypeEnumFactory FolderSettingsFolderTypeEnum = "Factory"
FolderSettingsFolderTypeEnumHouse FolderSettingsFolderTypeEnum = "House"
FolderSettingsFolderTypeEnumOffice FolderSettingsFolderTypeEnum = "Office"
FolderSettingsFolderTypeEnumMachine FolderSettingsFolderTypeEnum = "Machine"
FolderSettingsFolderTypeEnumVirtualMeter FolderSettingsFolderTypeEnum = "VirtualMeter"
FolderSettingsFolderTypeEnumElecticityFolder FolderSettingsFolderTypeEnum = "ElecticityFolder"
FolderSettingsFolderTypeEnumWaterFolder FolderSettingsFolderTypeEnum = "WaterFolder"
FolderSettingsFolderTypeEnumHeatFolder FolderSettingsFolderTypeEnum = "HeatFolder"
FolderSettingsFolderTypeEnumGasFolder FolderSettingsFolderTypeEnum = "GasFolder"
FolderSettingsFolderTypeEnumTemperatureFolder FolderSettingsFolderTypeEnum = "TemperatureFolder"
FolderSettingsFolderTypeEnumSun FolderSettingsFolderTypeEnum = "Sun"
FolderSettingsFolderTypeEnumLight FolderSettingsFolderTypeEnum = "Light"
FolderSettingsFolderTypeEnumIce FolderSettingsFolderTypeEnum = "Ice"
FolderSettingsFolderTypeEnumSofa FolderSettingsFolderTypeEnum = "Sofa"
FolderSettingsFolderTypeEnumFood FolderSettingsFolderTypeEnum = "Food"
FolderSettingsFolderTypeEnumCoffee FolderSettingsFolderTypeEnum = "Coffee"
FolderSettingsFolderTypeEnumCar FolderSettingsFolderTypeEnum = "Car"
FolderSettingsFolderTypeEnumChargingStation FolderSettingsFolderTypeEnum = "ChargingStation"
FolderSettingsFolderTypeEnumMeter FolderSettingsFolderTypeEnum = "Meter"
FolderSettingsFolderTypeEnumUser FolderSettingsFolderTypeEnum = "User"
FolderSettingsFolderTypeEnumTrash FolderSettingsFolderTypeEnum = "Trash"
FolderSettingsFolderTypeEnumGridPhotovoltaicPowerSystem FolderSettingsFolderTypeEnum = "GridPhotovoltaicPowerSystem"
)


type FolderSettings struct {
    Description *string `json:"Description,omitempty" form:"name=Description"`
    Enable *bool `json:"Enable,omitempty" form:"name=Enable"`
    FolderType *FolderSettingsFolderTypeEnum `json:"FolderType,omitempty" form:"name=FolderType"`
    Name *string `json:"Name,omitempty" form:"name=Name"`
    ParentFolderID *string `json:"ParentFolderId,omitempty" form:"name=ParentFolderId"`
    SerialNumber *int64 `json:"SerialNumber,omitempty" form:"name=SerialNumber"`
    UseableForVirtualBillingMeters *bool `json:"UseableForVirtualBillingMeters,omitempty" form:"name=UseableForVirtualBillingMeters"`
    ValueCorrection *float64 `json:"ValueCorrection,omitempty" form:"name=ValueCorrection"`
    ValueCorrectionParentFolder *float64 `json:"ValueCorrectionParentFolder,omitempty" form:"name=ValueCorrectionParentFolder"`
    VisualizationName *string `json:"VisualizationName,omitempty" form:"name=VisualizationName"`
    
}

