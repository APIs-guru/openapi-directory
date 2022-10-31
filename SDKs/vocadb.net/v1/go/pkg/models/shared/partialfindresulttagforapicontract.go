package shared

type PartialFindResultTagForAPIContract struct {
	Items      []TagForAPIContract `json:"items,omitempty"`
	Term       *string             `json:"term,omitempty"`
	TotalCount *int32              `json:"totalCount,omitempty"`
}
