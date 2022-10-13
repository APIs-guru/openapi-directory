package shared

type ListCashDrawerShiftEventsResponse struct {
	Cursor *string                `json:"cursor"`
	Errors []Error                `json:"errors"`
	Events []CashDrawerShiftEvent `json:"events"`
}
