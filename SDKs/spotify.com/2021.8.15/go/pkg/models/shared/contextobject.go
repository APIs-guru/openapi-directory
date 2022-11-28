package shared

// ContextObject

// https://developer.spotify.com/documentation/web-api/reference/#object-contextobject - Find more info on the official Spotify Web API Reference
type ContextObject struct {
	ExternalUrls *ExternalURLObject `json:"external_urls,omitempty"`
	Href         *string            `json:"href,omitempty"`
	Type         *string            `json:"type,omitempty"`
	URI          *string            `json:"uri,omitempty"`
}
