package shared

type MeterFolderInformation struct {
	CommunicationModuleFirmwareVersion *int32              `json:"CommunicationModuleFirmwareVersion"`
	CommunicationModuleHardwareVersion *int32              `json:"CommunicationModuleHardwareVersion"`
	FirmwareVersion                    *int32              `json:"FirmwareVersion"`
	HardwareVersion                    *int32              `json:"HardwareVersion"`
	InputInformations                  []InputInformation  `json:"InputInformations"`
	IsFolder                           *bool               `json:"IsFolder"`
	Name                               *string             `json:"Name"`
	OutputInformations                 []OutputInformation `json:"OutputInformations"`
}
