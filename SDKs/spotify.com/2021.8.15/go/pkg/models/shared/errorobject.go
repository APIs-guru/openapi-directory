package shared

// ErrorObject

// https://developer.spotify.com/documentation/web-api/reference/#object-errorobject - Find more info on the official Spotify Web API Reference
type ErrorObject struct {
	Message *string `json:"message,omitempty"`
	Status  *int32  `json:"status,omitempty"`
}
