package shared

type PartialFindResultAlbumForUserForAPIContract struct {
	Items      []AlbumForUserForAPIContract `json:"items"`
	Term       *string                      `json:"term"`
	TotalCount *int32                       `json:"totalCount"`
}
