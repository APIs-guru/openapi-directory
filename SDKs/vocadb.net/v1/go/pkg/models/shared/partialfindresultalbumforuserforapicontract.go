package shared

type PartialFindResultAlbumForUserForAPIContract struct {
	Items      []AlbumForUserForAPIContract `json:"items,omitempty"`
	Term       *string                      `json:"term,omitempty"`
	TotalCount *int32                       `json:"totalCount,omitempty"`
}
