package shared

// LinkedTrackObject

// https://developer.spotify.com/documentation/web-api/reference/#object-linkedtrackobject - Find more info on the official Spotify Web API Reference
type LinkedTrackObject struct {
	ExternalUrls *ExternalURLObject `json:"external_urls,omitempty"`
	Href         *string            `json:"href,omitempty"`
	ID           *string            `json:"id,omitempty"`
	Type         *string            `json:"type,omitempty"`
	URI          *string            `json:"uri,omitempty"`
}
