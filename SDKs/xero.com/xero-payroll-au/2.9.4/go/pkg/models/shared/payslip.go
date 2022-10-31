package shared

type Payslip struct {
	DeductionLines         []DeductionLine      `json:"DeductionLines,omitempty"`
	Deductions             *float64             `json:"Deductions,omitempty"`
	EarningsLines          []EarningsLine       `json:"EarningsLines,omitempty"`
	EmployeeID             *string              `json:"EmployeeID,omitempty"`
	FirstName              *string              `json:"FirstName,omitempty"`
	LastName               *string              `json:"LastName,omitempty"`
	LeaveAccrualLines      []LeaveAccrualLine   `json:"LeaveAccrualLines,omitempty"`
	LeaveEarningsLines     []LeaveEarningsLine  `json:"LeaveEarningsLines,omitempty"`
	NetPay                 *float64             `json:"NetPay,omitempty"`
	PayslipID              *string              `json:"PayslipID,omitempty"`
	ReimbursementLines     []ReimbursementLine  `json:"ReimbursementLines,omitempty"`
	Reimbursements         *float64             `json:"Reimbursements,omitempty"`
	Super                  *float64             `json:"Super,omitempty"`
	SuperannuationLines    []SuperannuationLine `json:"SuperannuationLines,omitempty"`
	Tax                    *float64             `json:"Tax,omitempty"`
	TaxLines               []TaxLine            `json:"TaxLines,omitempty"`
	TimesheetEarningsLines []EarningsLine       `json:"TimesheetEarningsLines,omitempty"`
	UpdatedDateUtc         *string              `json:"UpdatedDateUTC,omitempty"`
	Wages                  *float64             `json:"Wages,omitempty"`
}
