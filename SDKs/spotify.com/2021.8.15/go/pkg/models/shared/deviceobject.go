package shared

// DeviceObject

// https://developer.spotify.com/documentation/web-api/reference/#object-deviceobject - Find more info on the official Spotify Web API Reference
type DeviceObject struct {
	ID               *string `json:"id,omitempty"`
	IsActive         *bool   `json:"is_active,omitempty"`
	IsPrivateSession *bool   `json:"is_private_session,omitempty"`
	IsRestricted     *bool   `json:"is_restricted,omitempty"`
	Name             *string `json:"name,omitempty"`
	Type             *string `json:"type,omitempty"`
	VolumePercent    *int32  `json:"volume_percent,omitempty"`
}
