package shared

type PartialFindResultSongListForAPIContract struct {
	Items      []SongListForAPIContract `json:"items"`
	Term       *string                  `json:"term"`
	TotalCount *int32                   `json:"totalCount"`
}
