package shared

type SearchShiftsResponse struct {
	Cursor *string `json:"cursor,omitempty"`
	Errors []Error `json:"errors,omitempty"`
	Shifts []Shift `json:"shifts,omitempty"`
}
