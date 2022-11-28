package shared

// PlaylistTracksRefObject

// https://developer.spotify.com/documentation/web-api/reference/#object-playlisttracksrefobject - Find more info on the official Spotify Web API Reference
type PlaylistTracksRefObject struct {
	Href  *string `json:"href,omitempty"`
	Total *int32  `json:"total,omitempty"`
}
