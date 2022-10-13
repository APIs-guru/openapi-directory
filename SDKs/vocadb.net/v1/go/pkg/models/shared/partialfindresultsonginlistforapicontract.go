package shared

type PartialFindResultSongInListForAPIContract struct {
	Items      []SongInListForAPIContract `json:"items"`
	Term       *string                    `json:"term"`
	TotalCount *int32                     `json:"totalCount"`
}
