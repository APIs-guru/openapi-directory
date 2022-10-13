package shared

type ShiftQuery struct {
	Filter *ShiftFilter `json:"filter"`
	Sort   *ShiftSort   `json:"sort"`
}
