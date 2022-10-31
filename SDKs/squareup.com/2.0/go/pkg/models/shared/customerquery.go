package shared

type CustomerQuery struct {
	Filter *CustomerFilter `json:"filter,omitempty"`
	Sort   *CustomerSort   `json:"sort,omitempty"`
}
