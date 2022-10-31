package shared



type GetDeviceCodeResponse struct {
    DeviceCode *DeviceCode `json:"device_code,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

