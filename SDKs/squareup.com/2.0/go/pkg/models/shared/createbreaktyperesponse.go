package shared

type CreateBreakTypeResponse struct {
	BreakType *BreakType `json:"break_type"`
	Errors    []Error    `json:"errors"`
}
