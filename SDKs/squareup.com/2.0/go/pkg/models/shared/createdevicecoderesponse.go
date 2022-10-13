package shared

type CreateDeviceCodeResponse struct {
	DeviceCode *DeviceCode `json:"device_code"`
	Errors     []Error     `json:"errors"`
}
