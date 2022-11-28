package shared

// PlaylistPagingObjectPlaylists

// https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
type PlaylistPagingObjectPlaylists struct {
	Href     *string                    `json:"href,omitempty"`
	Items    []SimplifiedPlaylistObject `json:"items,omitempty"`
	Limit    *int32                     `json:"limit,omitempty"`
	Next     *string                    `json:"next,omitempty"`
	Offset   *int32                     `json:"offset,omitempty"`
	Previous *string                    `json:"previous,omitempty"`
	Total    *int32                     `json:"total,omitempty"`
}

type PlaylistPagingObject struct {
	Playlists *PlaylistPagingObjectPlaylists `json:"playlists,omitempty"`
}
