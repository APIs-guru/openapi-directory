package shared

type PayslipSummary struct {
	Deductions     *float64 `json:"Deductions,omitempty"`
	EmployeeGroup  *string  `json:"EmployeeGroup,omitempty"`
	EmployeeID     *string  `json:"EmployeeID,omitempty"`
	FirstName      *string  `json:"FirstName,omitempty"`
	LastName       *string  `json:"LastName,omitempty"`
	NetPay         *float64 `json:"NetPay,omitempty"`
	PayslipID      *string  `json:"PayslipID,omitempty"`
	Reimbursements *float64 `json:"Reimbursements,omitempty"`
	Super          *float64 `json:"Super,omitempty"`
	Tax            *float64 `json:"Tax,omitempty"`
	UpdatedDateUtc *string  `json:"UpdatedDateUTC,omitempty"`
	Wages          *float64 `json:"Wages,omitempty"`
}
