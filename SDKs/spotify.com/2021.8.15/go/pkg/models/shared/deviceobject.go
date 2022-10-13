package shared

type DeviceObject struct {
	ID               *string `json:"id"`
	IsActive         *bool   `json:"is_active"`
	IsPrivateSession *bool   `json:"is_private_session"`
	IsRestricted     *bool   `json:"is_restricted"`
	Name             *string `json:"name"`
	Type             *string `json:"type"`
	VolumePercent    *int32  `json:"volume_percent"`
}
