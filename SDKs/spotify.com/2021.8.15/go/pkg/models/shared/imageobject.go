package shared

// ImageObject

// https://developer.spotify.com/documentation/web-api/reference/#object-imageobject - Find more info on the official Spotify Web API Reference
type ImageObject struct {
	Height *int32  `json:"height,omitempty"`
	URL    *string `json:"url,omitempty"`
	Width  *int32  `json:"width,omitempty"`
}
