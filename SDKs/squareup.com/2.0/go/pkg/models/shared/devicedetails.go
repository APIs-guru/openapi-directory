package shared

type DeviceDetails struct {
	DeviceID             *string `json:"device_id"`
	DeviceInstallationID *string `json:"device_installation_id"`
	DeviceName           *string `json:"device_name"`
}
