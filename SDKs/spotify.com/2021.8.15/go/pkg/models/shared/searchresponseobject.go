package shared

type SearchResponseObjectAlbums struct {
	Href     *string                 `json:"href"`
	Items    []SimplifiedAlbumObject `json:"items"`
	Limit    *int32                  `json:"limit"`
	Next     *string                 `json:"next"`
	Offset   *int32                  `json:"offset"`
	Previous *string                 `json:"previous"`
	Total    *int32                  `json:"total"`
}

type SearchResponseObjectArtists struct {
	Href     *string        `json:"href"`
	Items    []ArtistObject `json:"items"`
	Limit    *int32         `json:"limit"`
	Next     *string        `json:"next"`
	Offset   *int32         `json:"offset"`
	Previous *string        `json:"previous"`
	Total    *int32         `json:"total"`
}

type SearchResponseObjectEpisodes struct {
	Href     *string                   `json:"href"`
	Items    []SimplifiedEpisodeObject `json:"items"`
	Limit    *int32                    `json:"limit"`
	Next     *string                   `json:"next"`
	Offset   *int32                    `json:"offset"`
	Previous *string                   `json:"previous"`
	Total    *int32                    `json:"total"`
}

type SearchResponseObjectPlaylists struct {
	Href     *string                    `json:"href"`
	Items    []SimplifiedPlaylistObject `json:"items"`
	Limit    *int32                     `json:"limit"`
	Next     *string                    `json:"next"`
	Offset   *int32                     `json:"offset"`
	Previous *string                    `json:"previous"`
	Total    *int32                     `json:"total"`
}

type SearchResponseObjectShows struct {
	Href     *string                `json:"href"`
	Items    []SimplifiedShowObject `json:"items"`
	Limit    *int32                 `json:"limit"`
	Next     *string                `json:"next"`
	Offset   *int32                 `json:"offset"`
	Previous *string                `json:"previous"`
	Total    *int32                 `json:"total"`
}

type SearchResponseObjectTracks struct {
	Href     *string       `json:"href"`
	Items    []TrackObject `json:"items"`
	Limit    *int32        `json:"limit"`
	Next     *string       `json:"next"`
	Offset   *int32        `json:"offset"`
	Previous *string       `json:"previous"`
	Total    *int32        `json:"total"`
}

type SearchResponseObject struct {
	Albums    *SearchResponseObjectAlbums    `json:"albums"`
	Artists   *SearchResponseObjectArtists   `json:"artists"`
	Episodes  *SearchResponseObjectEpisodes  `json:"episodes"`
	Playlists *SearchResponseObjectPlaylists `json:"playlists"`
	Shows     *SearchResponseObjectShows     `json:"shows"`
	Tracks    *SearchResponseObjectTracks    `json:"tracks"`
}
