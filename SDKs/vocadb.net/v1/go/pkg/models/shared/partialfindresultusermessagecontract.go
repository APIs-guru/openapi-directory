package shared

type PartialFindResultUserMessageContract struct {
	Items      []UserMessageContract `json:"items,omitempty"`
	Term       *string               `json:"term,omitempty"`
	TotalCount *int32                `json:"totalCount,omitempty"`
}
