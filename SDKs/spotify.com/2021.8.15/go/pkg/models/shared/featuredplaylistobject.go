package shared

type FeaturedPlaylistObjectPlaylists struct {
	Href     *string                    `json:"href"`
	Items    []SimplifiedPlaylistObject `json:"items"`
	Limit    *int32                     `json:"limit"`
	Next     *string                    `json:"next"`
	Offset   *int32                     `json:"offset"`
	Previous *string                    `json:"previous"`
	Total    *int32                     `json:"total"`
}

type FeaturedPlaylistObject struct {
	Message   *string                          `json:"message"`
	Playlists *FeaturedPlaylistObjectPlaylists `json:"playlists"`
}
