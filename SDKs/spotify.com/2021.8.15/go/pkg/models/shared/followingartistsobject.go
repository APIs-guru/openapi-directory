package shared

type FollowingArtistsObjectArtists struct {
	Cursors *CursorObject  `json:"cursors"`
	Href    *string        `json:"href"`
	Items   []ArtistObject `json:"items"`
	Limit   *int32         `json:"limit"`
	Next    *string        `json:"next"`
	Total   *int32         `json:"total"`
}

type FollowingArtistsObject struct {
	Artists *FollowingArtistsObjectArtists `json:"artists"`
}
