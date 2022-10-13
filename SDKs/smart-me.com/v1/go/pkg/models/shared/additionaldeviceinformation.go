package shared

type AdditionalDeviceInformation struct {
	AdditionalMeterSerialNumber *string `json:"AdditionalMeterSerialNumber"`
	FirmwareVersion             *int32  `json:"FirmwareVersion"`
	HardwareVersion             *int32  `json:"HardwareVersion"`
	ID                          *string `json:"ID"`
	NetworkConnection           *string `json:"NetworkConnection"`
	NetworkConnectionRssi       *int32  `json:"NetworkConnectionRSSI"`
}
