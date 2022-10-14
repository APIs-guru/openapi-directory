package shared

type FeaturedPlaylistObjectPlaylists struct {
	Href     *string                    `json:"href,omitempty"`
	Items    []SimplifiedPlaylistObject `json:"items,omitempty"`
	Limit    *int32                     `json:"limit,omitempty"`
	Next     *string                    `json:"next,omitempty"`
	Offset   *int32                     `json:"offset,omitempty"`
	Previous *string                    `json:"previous,omitempty"`
	Total    *int32                     `json:"total,omitempty"`
}

type FeaturedPlaylistObject struct {
	Message   *string                          `json:"message,omitempty"`
	Playlists *FeaturedPlaylistObjectPlaylists `json:"playlists,omitempty"`
}
