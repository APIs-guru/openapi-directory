package shared

type PartialFindResultEntryForAPIContract struct {
	Items      []EntryForAPIContract `json:"items,omitempty"`
	Term       *string               `json:"term,omitempty"`
	TotalCount *int32                `json:"totalCount,omitempty"`
}
