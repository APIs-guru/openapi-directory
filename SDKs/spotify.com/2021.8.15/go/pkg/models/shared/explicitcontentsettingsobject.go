package shared

// ExplicitContentSettingsObject

// https://developer.spotify.com/documentation/web-api/reference/#object-explicitcontentsettingsobject - Find more info on the official Spotify Web API Reference
type ExplicitContentSettingsObject struct {
	FilterEnabled *bool `json:"filter_enabled,omitempty"`
	FilterLocked  *bool `json:"filter_locked,omitempty"`
}
