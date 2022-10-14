package shared

type PartialFindResultSongInListForAPIContract struct {
	Items      []SongInListForAPIContract `json:"items,omitempty"`
	Term       *string                    `json:"term,omitempty"`
	TotalCount *int32                     `json:"totalCount,omitempty"`
}
