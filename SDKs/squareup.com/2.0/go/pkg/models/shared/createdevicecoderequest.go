package shared



type CreateDeviceCodeRequest struct {
    DeviceCode DeviceCode `json:"device_code"`
    IdempotencyKey string `json:"idempotency_key"`
    
}

