package shared

// MeterFolderInformation
// Container Class for the Web API
type MeterFolderInformation struct {
	CommunicationModuleFirmwareVersion *int32              `json:"CommunicationModuleFirmwareVersion,omitempty"`
	CommunicationModuleHardwareVersion *int32              `json:"CommunicationModuleHardwareVersion,omitempty"`
	FirmwareVersion                    *int32              `json:"FirmwareVersion,omitempty"`
	HardwareVersion                    *int32              `json:"HardwareVersion,omitempty"`
	InputInformations                  []InputInformation  `json:"InputInformations,omitempty"`
	IsFolder                           *bool               `json:"IsFolder,omitempty"`
	Name                               *string             `json:"Name,omitempty"`
	OutputInformations                 []OutputInformation `json:"OutputInformations,omitempty"`
}
