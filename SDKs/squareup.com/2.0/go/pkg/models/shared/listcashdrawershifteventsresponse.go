package shared

type ListCashDrawerShiftEventsResponse struct {
	Cursor *string                `json:"cursor,omitempty"`
	Errors []Error                `json:"errors,omitempty"`
	Events []CashDrawerShiftEvent `json:"events,omitempty"`
}
