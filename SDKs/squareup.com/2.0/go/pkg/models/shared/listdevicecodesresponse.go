package shared

type ListDeviceCodesResponse struct {
	Cursor      *string      `json:"cursor"`
	DeviceCodes []DeviceCode `json:"device_codes"`
	Errors      []Error      `json:"errors"`
}
