package shared

// CategoryObject

// https://developer.spotify.com/documentation/web-api/reference/#object-categoryobject - Find more info on the official Spotify Web API Reference
type CategoryObject struct {
	Href  *string       `json:"href,omitempty"`
	Icons []ImageObject `json:"icons,omitempty"`
	ID    *string       `json:"id,omitempty"`
	Name  *string       `json:"name,omitempty"`
}
