package shared

// DevicesObject

// https://developer.spotify.com/documentation/web-api/reference/#object-devicesobject - Find more info on the official Spotify Web API Reference
type DevicesObject struct {
	Devices []DeviceObject `json:"devices,omitempty"`
}
