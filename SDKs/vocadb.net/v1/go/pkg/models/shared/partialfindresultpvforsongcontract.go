package shared

type PartialFindResultPvForSongContract struct {
	Items      []PvForSongContract `json:"items,omitempty"`
	Term       *string             `json:"term,omitempty"`
	TotalCount *int32              `json:"totalCount,omitempty"`
}
