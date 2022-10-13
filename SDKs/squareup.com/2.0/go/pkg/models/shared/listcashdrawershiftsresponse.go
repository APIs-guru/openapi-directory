package shared

type ListCashDrawerShiftsResponse struct {
	Cursor *string                  `json:"cursor"`
	Errors []Error                  `json:"errors"`
	Items  []CashDrawerShiftSummary `json:"items"`
}
