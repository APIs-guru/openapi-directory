package shared

type PartialFindResultReleaseEventSeriesForAPIContract struct {
	Items      []ReleaseEventSeriesForAPIContract `json:"items,omitempty"`
	Term       *string                            `json:"term,omitempty"`
	TotalCount *int32                             `json:"totalCount,omitempty"`
}
