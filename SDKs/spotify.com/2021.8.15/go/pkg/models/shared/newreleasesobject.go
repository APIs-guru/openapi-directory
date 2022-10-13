package shared

type NewReleasesObjectAlbums struct {
	Href     *string                 `json:"href"`
	Items    []SimplifiedAlbumObject `json:"items"`
	Limit    *int32                  `json:"limit"`
	Next     *string                 `json:"next"`
	Offset   *int32                  `json:"offset"`
	Previous *string                 `json:"previous"`
	Total    *int32                  `json:"total"`
}

type NewReleasesObject struct {
	Albums *NewReleasesObjectAlbums `json:"albums"`
}
