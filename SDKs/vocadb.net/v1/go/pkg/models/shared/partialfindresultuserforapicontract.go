package shared

type PartialFindResultUserForAPIContract struct {
	Items      []UserForAPIContract `json:"items"`
	Term       *string              `json:"term"`
	TotalCount *int32               `json:"totalCount"`
}
