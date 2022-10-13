package shared

type CashDrawerShiftSummary struct {
	ClosedAt          *string `json:"closed_at"`
	ClosedCashMoney   *Money  `json:"closed_cash_money"`
	Description       *string `json:"description"`
	EndedAt           *string `json:"ended_at"`
	ExpectedCashMoney *Money  `json:"expected_cash_money"`
	ID                *string `json:"id"`
	OpenedAt          *string `json:"opened_at"`
	OpenedCashMoney   *Money  `json:"opened_cash_money"`
	State             *string `json:"state"`
}
