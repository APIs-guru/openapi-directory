package shared

type NewReleasesObjectAlbums struct {
	Href     *string                 `json:"href,omitempty"`
	Items    []SimplifiedAlbumObject `json:"items,omitempty"`
	Limit    *int32                  `json:"limit,omitempty"`
	Next     *string                 `json:"next,omitempty"`
	Offset   *int32                  `json:"offset,omitempty"`
	Previous *string                 `json:"previous,omitempty"`
	Total    *int32                  `json:"total,omitempty"`
}

type NewReleasesObject struct {
	Albums *NewReleasesObjectAlbums `json:"albums,omitempty"`
}
