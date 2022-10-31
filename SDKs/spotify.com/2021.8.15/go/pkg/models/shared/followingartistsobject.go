package shared

type FollowingArtistsObjectArtists struct {
	Cursors *CursorObject  `json:"cursors,omitempty"`
	Href    *string        `json:"href,omitempty"`
	Items   []ArtistObject `json:"items,omitempty"`
	Limit   *int32         `json:"limit,omitempty"`
	Next    *string        `json:"next,omitempty"`
	Total   *int32         `json:"total,omitempty"`
}

type FollowingArtistsObject struct {
	Artists *FollowingArtistsObjectArtists `json:"artists,omitempty"`
}
