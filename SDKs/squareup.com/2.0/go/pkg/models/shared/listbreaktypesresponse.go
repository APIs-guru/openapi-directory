package shared

type ListBreakTypesResponse struct {
	BreakTypes []BreakType `json:"break_types"`
	Cursor     *string     `json:"cursor"`
	Errors     []Error     `json:"errors"`
}
