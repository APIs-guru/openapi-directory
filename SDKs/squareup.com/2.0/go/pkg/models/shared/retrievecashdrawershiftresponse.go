package shared

type RetrieveCashDrawerShiftResponse struct {
	CashDrawerShift *CashDrawerShift `json:"cash_drawer_shift"`
	Errors          []Error          `json:"errors"`
}
