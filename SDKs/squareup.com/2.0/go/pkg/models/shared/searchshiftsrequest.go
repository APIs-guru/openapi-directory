package shared

type SearchShiftsRequest struct {
	Cursor *string     `json:"cursor,omitempty"`
	Limit  *int64      `json:"limit,omitempty"`
	Query  *ShiftQuery `json:"query,omitempty"`
}
