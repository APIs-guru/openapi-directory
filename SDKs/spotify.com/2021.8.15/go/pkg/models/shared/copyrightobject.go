package shared

// CopyrightObject

// https://developer.spotify.com/documentation/web-api/reference/#object-copyrightobject - Find more info on the official Spotify Web API Reference
type CopyrightObject struct {
	Text *string `json:"text,omitempty"`
	Type *string `json:"type,omitempty"`
}
