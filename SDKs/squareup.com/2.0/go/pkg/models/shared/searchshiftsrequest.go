package shared

type SearchShiftsRequest struct {
	Cursor *string     `json:"cursor"`
	Limit  *int64      `json:"limit"`
	Query  *ShiftQuery `json:"query"`
}
