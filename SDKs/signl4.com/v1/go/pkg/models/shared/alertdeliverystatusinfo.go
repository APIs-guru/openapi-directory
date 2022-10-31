package shared



type AlertDeliveryStatusInfo struct {
    StatusCode *int32 `json:"statusCode,omitempty"`
    Users []UserDeliveryStatusInfo `json:"users,omitempty"`
    
}

