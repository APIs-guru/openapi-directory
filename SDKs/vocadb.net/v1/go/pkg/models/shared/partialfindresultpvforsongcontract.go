package shared

type PartialFindResultPvForSongContract struct {
	Items      []PvForSongContract `json:"items"`
	Term       *string             `json:"term"`
	TotalCount *int32              `json:"totalCount"`
}
