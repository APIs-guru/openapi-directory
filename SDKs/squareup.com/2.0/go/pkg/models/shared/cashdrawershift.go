package shared

type CashDrawerShift struct {
	CashPaidInMoney   *Money            `json:"cash_paid_in_money,omitempty"`
	CashPaidOutMoney  *Money            `json:"cash_paid_out_money,omitempty"`
	CashPaymentMoney  *Money            `json:"cash_payment_money,omitempty"`
	CashRefundsMoney  *Money            `json:"cash_refunds_money,omitempty"`
	ClosedAt          *string           `json:"closed_at,omitempty"`
	ClosedCashMoney   *Money            `json:"closed_cash_money,omitempty"`
	ClosingEmployeeID *string           `json:"closing_employee_id,omitempty"`
	Description       *string           `json:"description,omitempty"`
	Device            *CashDrawerDevice `json:"device,omitempty"`
	EmployeeIds       []string          `json:"employee_ids,omitempty"`
	EndedAt           *string           `json:"ended_at,omitempty"`
	EndingEmployeeID  *string           `json:"ending_employee_id,omitempty"`
	ExpectedCashMoney *Money            `json:"expected_cash_money,omitempty"`
	ID                *string           `json:"id,omitempty"`
	OpenedAt          *string           `json:"opened_at,omitempty"`
	OpenedCashMoney   *Money            `json:"opened_cash_money,omitempty"`
	OpeningEmployeeID *string           `json:"opening_employee_id,omitempty"`
	State             *string           `json:"state,omitempty"`
}
