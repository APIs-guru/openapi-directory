package shared

// ExternalIDObject

// https://developer.spotify.com/documentation/web-api/reference/#object-externalidobject - Find more info on the official Spotify Web API Reference
type ExternalIDObject struct {
	Ean  *string `json:"ean,omitempty"`
	Isrc *string `json:"isrc,omitempty"`
	Upc  *string `json:"upc,omitempty"`
}
