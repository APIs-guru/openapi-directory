package shared

type GetDeviceCodeResponse struct {
	DeviceCode *DeviceCode `json:"device_code"`
	Errors     []Error     `json:"errors"`
}
