package shared

type GetBreakTypeResponse struct {
	BreakType *BreakType `json:"break_type,omitempty"`
	Errors    []Error    `json:"errors,omitempty"`
}
