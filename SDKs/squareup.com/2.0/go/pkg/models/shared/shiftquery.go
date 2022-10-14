package shared

type ShiftQuery struct {
	Filter *ShiftFilter `json:"filter,omitempty"`
	Sort   *ShiftSort   `json:"sort,omitempty"`
}
