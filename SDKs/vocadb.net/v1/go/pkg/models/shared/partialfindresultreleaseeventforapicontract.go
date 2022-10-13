package shared

type PartialFindResultReleaseEventForAPIContract struct {
	Items      []ReleaseEventForAPIContract `json:"items"`
	Term       *string                      `json:"term"`
	TotalCount *int32                       `json:"totalCount"`
}
