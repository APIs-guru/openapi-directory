package shared

type PartialFindResultAlbumForAPIContract struct {
	Items      []AlbumForAPIContract `json:"items"`
	Term       *string               `json:"term"`
	TotalCount *int32                `json:"totalCount"`
}
