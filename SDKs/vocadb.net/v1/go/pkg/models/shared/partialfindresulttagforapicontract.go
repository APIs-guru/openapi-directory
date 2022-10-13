package shared

type PartialFindResultTagForAPIContract struct {
	Items      []TagForAPIContract `json:"items"`
	Term       *string             `json:"term"`
	TotalCount *int32              `json:"totalCount"`
}
