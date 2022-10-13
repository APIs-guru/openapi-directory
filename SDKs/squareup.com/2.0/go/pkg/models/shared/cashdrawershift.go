package shared

type CashDrawerShift struct {
	CashPaidInMoney   *Money            `json:"cash_paid_in_money"`
	CashPaidOutMoney  *Money            `json:"cash_paid_out_money"`
	CashPaymentMoney  *Money            `json:"cash_payment_money"`
	CashRefundsMoney  *Money            `json:"cash_refunds_money"`
	ClosedAt          *string           `json:"closed_at"`
	ClosedCashMoney   *Money            `json:"closed_cash_money"`
	ClosingEmployeeID *string           `json:"closing_employee_id"`
	Description       *string           `json:"description"`
	Device            *CashDrawerDevice `json:"device"`
	EmployeeIds       []string          `json:"employee_ids"`
	EndedAt           *string           `json:"ended_at"`
	EndingEmployeeID  *string           `json:"ending_employee_id"`
	ExpectedCashMoney *Money            `json:"expected_cash_money"`
	ID                *string           `json:"id"`
	OpenedAt          *string           `json:"opened_at"`
	OpenedCashMoney   *Money            `json:"opened_cash_money"`
	OpeningEmployeeID *string           `json:"opening_employee_id"`
	State             *string           `json:"state"`
}
