package shared

// AdditionalDeviceInformation
// Additional Information For a device
type AdditionalDeviceInformation struct {
	AdditionalMeterSerialNumber *string `json:"AdditionalMeterSerialNumber,omitempty"`
	FirmwareVersion             *int32  `json:"FirmwareVersion,omitempty"`
	HardwareVersion             *int32  `json:"HardwareVersion,omitempty"`
	ID                          *string `json:"ID,omitempty"`
	NetworkConnection           *string `json:"NetworkConnection,omitempty"`
	NetworkConnectionRssi       *int32  `json:"NetworkConnectionRSSI,omitempty"`
}
