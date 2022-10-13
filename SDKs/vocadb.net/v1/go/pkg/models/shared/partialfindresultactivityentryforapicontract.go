package shared

type PartialFindResultActivityEntryForAPIContract struct {
	Items      []ActivityEntryForAPIContract `json:"items"`
	Term       *string                       `json:"term"`
	TotalCount *int32                        `json:"totalCount"`
}
