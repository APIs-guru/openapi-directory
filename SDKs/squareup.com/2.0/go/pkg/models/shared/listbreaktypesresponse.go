package shared

type ListBreakTypesResponse struct {
	BreakTypes []BreakType `json:"break_types,omitempty"`
	Cursor     *string     `json:"cursor,omitempty"`
	Errors     []Error     `json:"errors,omitempty"`
}
