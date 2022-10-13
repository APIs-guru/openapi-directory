package shared

type GetBreakTypeResponse struct {
	BreakType *BreakType `json:"break_type"`
	Errors    []Error    `json:"errors"`
}
