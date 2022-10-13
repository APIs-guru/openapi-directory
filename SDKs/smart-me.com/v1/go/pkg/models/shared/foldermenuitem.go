package shared

type FolderMenuItemFolderTypeEnum string

const (
	FolderMenuItemFolderTypeEnumFolder                      FolderMenuItemFolderTypeEnum = "Folder"
	FolderMenuItemFolderTypeEnumLocation                    FolderMenuItemFolderTypeEnum = "Location"
	FolderMenuItemFolderTypeEnumFactory                     FolderMenuItemFolderTypeEnum = "Factory"
	FolderMenuItemFolderTypeEnumHouse                       FolderMenuItemFolderTypeEnum = "House"
	FolderMenuItemFolderTypeEnumOffice                      FolderMenuItemFolderTypeEnum = "Office"
	FolderMenuItemFolderTypeEnumMachine                     FolderMenuItemFolderTypeEnum = "Machine"
	FolderMenuItemFolderTypeEnumVirtualMeter                FolderMenuItemFolderTypeEnum = "VirtualMeter"
	FolderMenuItemFolderTypeEnumElecticityFolder            FolderMenuItemFolderTypeEnum = "ElecticityFolder"
	FolderMenuItemFolderTypeEnumWaterFolder                 FolderMenuItemFolderTypeEnum = "WaterFolder"
	FolderMenuItemFolderTypeEnumHeatFolder                  FolderMenuItemFolderTypeEnum = "HeatFolder"
	FolderMenuItemFolderTypeEnumGasFolder                   FolderMenuItemFolderTypeEnum = "GasFolder"
	FolderMenuItemFolderTypeEnumTemperatureFolder           FolderMenuItemFolderTypeEnum = "TemperatureFolder"
	FolderMenuItemFolderTypeEnumSun                         FolderMenuItemFolderTypeEnum = "Sun"
	FolderMenuItemFolderTypeEnumLight                       FolderMenuItemFolderTypeEnum = "Light"
	FolderMenuItemFolderTypeEnumIce                         FolderMenuItemFolderTypeEnum = "Ice"
	FolderMenuItemFolderTypeEnumSofa                        FolderMenuItemFolderTypeEnum = "Sofa"
	FolderMenuItemFolderTypeEnumFood                        FolderMenuItemFolderTypeEnum = "Food"
	FolderMenuItemFolderTypeEnumCoffee                      FolderMenuItemFolderTypeEnum = "Coffee"
	FolderMenuItemFolderTypeEnumCar                         FolderMenuItemFolderTypeEnum = "Car"
	FolderMenuItemFolderTypeEnumChargingStation             FolderMenuItemFolderTypeEnum = "ChargingStation"
	FolderMenuItemFolderTypeEnumMeter                       FolderMenuItemFolderTypeEnum = "Meter"
	FolderMenuItemFolderTypeEnumUser                        FolderMenuItemFolderTypeEnum = "User"
	FolderMenuItemFolderTypeEnumTrash                       FolderMenuItemFolderTypeEnum = "Trash"
	FolderMenuItemFolderTypeEnumGridPhotovoltaicPowerSystem FolderMenuItemFolderTypeEnum = "GridPhotovoltaicPowerSystem"
)

type FolderMenuItem struct {
	AutoExportSettings *AutoExportSettings           `json:"AutoExportSettings"`
	Children           []FolderMenuItem              `json:"Children"`
	Description        *string                       `json:"Description"`
	FolderType         *FolderMenuItemFolderTypeEnum `json:"FolderType"`
	Icon               *string                       `json:"Icon"`
	ID                 *string                       `json:"Id"`
	MeterSerialNumber  *string                       `json:"MeterSerialNumber"`
	Name               *string                       `json:"Name"`
	UserID             *string                       `json:"UserId"`
}
