package shared

type PartialFindResultEntryForAPIContract struct {
	Items      []EntryForAPIContract `json:"items"`
	Term       *string               `json:"term"`
	TotalCount *int32                `json:"totalCount"`
}
