package shared

type PayslipSummary struct {
	Deductions     *float64 `json:"Deductions"`
	EmployeeGroup  *string  `json:"EmployeeGroup"`
	EmployeeID     *string  `json:"EmployeeID"`
	FirstName      *string  `json:"FirstName"`
	LastName       *string  `json:"LastName"`
	NetPay         *float64 `json:"NetPay"`
	PayslipID      *string  `json:"PayslipID"`
	Reimbursements *float64 `json:"Reimbursements"`
	Super          *float64 `json:"Super"`
	Tax            *float64 `json:"Tax"`
	UpdatedDateUtc *string  `json:"UpdatedDateUTC"`
	Wages          *float64 `json:"Wages"`
}
