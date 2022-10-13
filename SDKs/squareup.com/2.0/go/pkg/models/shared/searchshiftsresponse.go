package shared

type SearchShiftsResponse struct {
	Cursor *string `json:"cursor"`
	Errors []Error `json:"errors"`
	Shifts []Shift `json:"shifts"`
}
