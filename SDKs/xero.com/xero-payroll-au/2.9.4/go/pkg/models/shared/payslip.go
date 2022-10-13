package shared

type Payslip struct {
	DeductionLines         []DeductionLine      `json:"DeductionLines"`
	Deductions             *float64             `json:"Deductions"`
	EarningsLines          []EarningsLine       `json:"EarningsLines"`
	EmployeeID             *string              `json:"EmployeeID"`
	FirstName              *string              `json:"FirstName"`
	LastName               *string              `json:"LastName"`
	LeaveAccrualLines      []LeaveAccrualLine   `json:"LeaveAccrualLines"`
	LeaveEarningsLines     []LeaveEarningsLine  `json:"LeaveEarningsLines"`
	NetPay                 *float64             `json:"NetPay"`
	PayslipID              *string              `json:"PayslipID"`
	ReimbursementLines     []ReimbursementLine  `json:"ReimbursementLines"`
	Reimbursements         *float64             `json:"Reimbursements"`
	Super                  *float64             `json:"Super"`
	SuperannuationLines    []SuperannuationLine `json:"SuperannuationLines"`
	Tax                    *float64             `json:"Tax"`
	TaxLines               []TaxLine            `json:"TaxLines"`
	TimesheetEarningsLines []EarningsLine       `json:"TimesheetEarningsLines"`
	UpdatedDateUtc         *string              `json:"UpdatedDateUTC"`
	Wages                  *float64             `json:"Wages"`
}
