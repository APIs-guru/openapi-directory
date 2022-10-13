package shared

type PartialFindResultSongForAPIContract struct {
	Items      []SongForAPIContract `json:"items"`
	Term       *string              `json:"term"`
	TotalCount *int32               `json:"totalCount"`
}
