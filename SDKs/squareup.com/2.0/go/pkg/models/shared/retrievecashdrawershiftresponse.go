package shared

type RetrieveCashDrawerShiftResponse struct {
	CashDrawerShift *CashDrawerShift `json:"cash_drawer_shift,omitempty"`
	Errors          []Error          `json:"errors,omitempty"`
}
