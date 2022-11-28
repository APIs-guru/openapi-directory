package shared

// SimplifiedArtistObject

// https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedartistobject - Find more info on the official Spotify Web API Reference
type SimplifiedArtistObject struct {
	ExternalUrls *ExternalURLObject `json:"external_urls,omitempty"`
	Href         *string            `json:"href,omitempty"`
	ID           *string            `json:"id,omitempty"`
	Name         *string            `json:"name,omitempty"`
	Type         *string            `json:"type,omitempty"`
	URI          *string            `json:"uri,omitempty"`
}
