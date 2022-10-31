package shared

type SearchResponseObjectAlbums struct {
	Href     *string                 `json:"href,omitempty"`
	Items    []SimplifiedAlbumObject `json:"items,omitempty"`
	Limit    *int32                  `json:"limit,omitempty"`
	Next     *string                 `json:"next,omitempty"`
	Offset   *int32                  `json:"offset,omitempty"`
	Previous *string                 `json:"previous,omitempty"`
	Total    *int32                  `json:"total,omitempty"`
}

type SearchResponseObjectArtists struct {
	Href     *string        `json:"href,omitempty"`
	Items    []ArtistObject `json:"items,omitempty"`
	Limit    *int32         `json:"limit,omitempty"`
	Next     *string        `json:"next,omitempty"`
	Offset   *int32         `json:"offset,omitempty"`
	Previous *string        `json:"previous,omitempty"`
	Total    *int32         `json:"total,omitempty"`
}

type SearchResponseObjectEpisodes struct {
	Href     *string                   `json:"href,omitempty"`
	Items    []SimplifiedEpisodeObject `json:"items,omitempty"`
	Limit    *int32                    `json:"limit,omitempty"`
	Next     *string                   `json:"next,omitempty"`
	Offset   *int32                    `json:"offset,omitempty"`
	Previous *string                   `json:"previous,omitempty"`
	Total    *int32                    `json:"total,omitempty"`
}

type SearchResponseObjectPlaylists struct {
	Href     *string                    `json:"href,omitempty"`
	Items    []SimplifiedPlaylistObject `json:"items,omitempty"`
	Limit    *int32                     `json:"limit,omitempty"`
	Next     *string                    `json:"next,omitempty"`
	Offset   *int32                     `json:"offset,omitempty"`
	Previous *string                    `json:"previous,omitempty"`
	Total    *int32                     `json:"total,omitempty"`
}

type SearchResponseObjectShows struct {
	Href     *string                `json:"href,omitempty"`
	Items    []SimplifiedShowObject `json:"items,omitempty"`
	Limit    *int32                 `json:"limit,omitempty"`
	Next     *string                `json:"next,omitempty"`
	Offset   *int32                 `json:"offset,omitempty"`
	Previous *string                `json:"previous,omitempty"`
	Total    *int32                 `json:"total,omitempty"`
}

type SearchResponseObjectTracks struct {
	Href     *string       `json:"href,omitempty"`
	Items    []TrackObject `json:"items,omitempty"`
	Limit    *int32        `json:"limit,omitempty"`
	Next     *string       `json:"next,omitempty"`
	Offset   *int32        `json:"offset,omitempty"`
	Previous *string       `json:"previous,omitempty"`
	Total    *int32        `json:"total,omitempty"`
}

type SearchResponseObject struct {
	Albums    *SearchResponseObjectAlbums    `json:"albums,omitempty"`
	Artists   *SearchResponseObjectArtists   `json:"artists,omitempty"`
	Episodes  *SearchResponseObjectEpisodes  `json:"episodes,omitempty"`
	Playlists *SearchResponseObjectPlaylists `json:"playlists,omitempty"`
	Shows     *SearchResponseObjectShows     `json:"shows,omitempty"`
	Tracks    *SearchResponseObjectTracks    `json:"tracks,omitempty"`
}
