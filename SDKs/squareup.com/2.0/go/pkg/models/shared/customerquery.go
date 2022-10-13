package shared

type CustomerQuery struct {
	Filter *CustomerFilter `json:"filter"`
	Sort   *CustomerSort   `json:"sort"`
}
