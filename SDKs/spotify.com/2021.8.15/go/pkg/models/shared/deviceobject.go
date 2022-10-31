package shared



type DeviceObject struct {
    ID *string `json:"id,omitempty"`
    IsActive *bool `json:"is_active,omitempty"`
    IsPrivateSession *bool `json:"is_private_session,omitempty"`
    IsRestricted *bool `json:"is_restricted,omitempty"`
    Name *string `json:"name,omitempty"`
    Type *string `json:"type,omitempty"`
    VolumePercent *int32 `json:"volume_percent,omitempty"`
    
}

