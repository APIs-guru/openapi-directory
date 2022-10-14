package shared

type PartialFindResultSongListForAPIContract struct {
	Items      []SongListForAPIContract `json:"items,omitempty"`
	Term       *string                  `json:"term,omitempty"`
	TotalCount *int32                   `json:"totalCount,omitempty"`
}
