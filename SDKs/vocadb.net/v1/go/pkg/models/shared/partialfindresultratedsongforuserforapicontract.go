package shared

type PartialFindResultRatedSongForUserForAPIContract struct {
	Items      []RatedSongForUserForAPIContract `json:"items"`
	Term       *string                          `json:"term"`
	TotalCount *int32                           `json:"totalCount"`
}
