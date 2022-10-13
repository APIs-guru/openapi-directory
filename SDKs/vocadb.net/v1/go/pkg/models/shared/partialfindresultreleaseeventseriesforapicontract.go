package shared

type PartialFindResultReleaseEventSeriesForAPIContract struct {
	Items      []ReleaseEventSeriesForAPIContract `json:"items"`
	Term       *string                            `json:"term"`
	TotalCount *int32                             `json:"totalCount"`
}
