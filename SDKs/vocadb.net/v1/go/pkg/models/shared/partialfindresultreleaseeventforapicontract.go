package shared

type PartialFindResultReleaseEventForAPIContract struct {
	Items      []ReleaseEventForAPIContract `json:"items,omitempty"`
	Term       *string                      `json:"term,omitempty"`
	TotalCount *int32                       `json:"totalCount,omitempty"`
}
