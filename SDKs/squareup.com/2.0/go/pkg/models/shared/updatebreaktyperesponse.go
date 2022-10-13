package shared

type UpdateBreakTypeResponse struct {
	BreakType *BreakType `json:"break_type"`
	Errors    []Error    `json:"errors"`
}
