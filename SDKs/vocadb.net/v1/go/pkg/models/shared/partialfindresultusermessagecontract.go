package shared

type PartialFindResultUserMessageContract struct {
	Items      []UserMessageContract `json:"items"`
	Term       *string               `json:"term"`
	TotalCount *int32                `json:"totalCount"`
}
