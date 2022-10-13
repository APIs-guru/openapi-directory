package shared

type FolderSettingsFolderTypeEnum string

const (
	FolderSettingsFolderTypeEnumFolder                      FolderSettingsFolderTypeEnum = "Folder"
	FolderSettingsFolderTypeEnumLocation                    FolderSettingsFolderTypeEnum = "Location"
	FolderSettingsFolderTypeEnumFactory                     FolderSettingsFolderTypeEnum = "Factory"
	FolderSettingsFolderTypeEnumHouse                       FolderSettingsFolderTypeEnum = "House"
	FolderSettingsFolderTypeEnumOffice                      FolderSettingsFolderTypeEnum = "Office"
	FolderSettingsFolderTypeEnumMachine                     FolderSettingsFolderTypeEnum = "Machine"
	FolderSettingsFolderTypeEnumVirtualMeter                FolderSettingsFolderTypeEnum = "VirtualMeter"
	FolderSettingsFolderTypeEnumElecticityFolder            FolderSettingsFolderTypeEnum = "ElecticityFolder"
	FolderSettingsFolderTypeEnumWaterFolder                 FolderSettingsFolderTypeEnum = "WaterFolder"
	FolderSettingsFolderTypeEnumHeatFolder                  FolderSettingsFolderTypeEnum = "HeatFolder"
	FolderSettingsFolderTypeEnumGasFolder                   FolderSettingsFolderTypeEnum = "GasFolder"
	FolderSettingsFolderTypeEnumTemperatureFolder           FolderSettingsFolderTypeEnum = "TemperatureFolder"
	FolderSettingsFolderTypeEnumSun                         FolderSettingsFolderTypeEnum = "Sun"
	FolderSettingsFolderTypeEnumLight                       FolderSettingsFolderTypeEnum = "Light"
	FolderSettingsFolderTypeEnumIce                         FolderSettingsFolderTypeEnum = "Ice"
	FolderSettingsFolderTypeEnumSofa                        FolderSettingsFolderTypeEnum = "Sofa"
	FolderSettingsFolderTypeEnumFood                        FolderSettingsFolderTypeEnum = "Food"
	FolderSettingsFolderTypeEnumCoffee                      FolderSettingsFolderTypeEnum = "Coffee"
	FolderSettingsFolderTypeEnumCar                         FolderSettingsFolderTypeEnum = "Car"
	FolderSettingsFolderTypeEnumChargingStation             FolderSettingsFolderTypeEnum = "ChargingStation"
	FolderSettingsFolderTypeEnumMeter                       FolderSettingsFolderTypeEnum = "Meter"
	FolderSettingsFolderTypeEnumUser                        FolderSettingsFolderTypeEnum = "User"
	FolderSettingsFolderTypeEnumTrash                       FolderSettingsFolderTypeEnum = "Trash"
	FolderSettingsFolderTypeEnumGridPhotovoltaicPowerSystem FolderSettingsFolderTypeEnum = "GridPhotovoltaicPowerSystem"
)

type FolderSettings struct {
	Description                    *string                       `json:"Description" form:"name=Description"`
	Enable                         *bool                         `json:"Enable" form:"name=Enable"`
	FolderType                     *FolderSettingsFolderTypeEnum `json:"FolderType" form:"name=FolderType"`
	Name                           *string                       `json:"Name" form:"name=Name"`
	ParentFolderID                 *string                       `json:"ParentFolderId" form:"name=ParentFolderId"`
	SerialNumber                   *int64                        `json:"SerialNumber" form:"name=SerialNumber"`
	UseableForVirtualBillingMeters *bool                         `json:"UseableForVirtualBillingMeters" form:"name=UseableForVirtualBillingMeters"`
	ValueCorrection                *float64                      `json:"ValueCorrection" form:"name=ValueCorrection"`
	ValueCorrectionParentFolder    *float64                      `json:"ValueCorrectionParentFolder" form:"name=ValueCorrectionParentFolder"`
	VisualizationName              *string                       `json:"VisualizationName" form:"name=VisualizationName"`
}
