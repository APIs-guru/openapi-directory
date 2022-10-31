package shared



type ListDeviceCodesResponse struct {
    Cursor *string `json:"cursor,omitempty"`
    DeviceCodes []DeviceCode `json:"device_codes,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

