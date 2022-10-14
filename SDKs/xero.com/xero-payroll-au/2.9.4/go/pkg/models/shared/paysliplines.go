package shared

type PayslipLines struct {
	DeductionLines         []DeductionLine      `json:"DeductionLines,omitempty"`
	EarningsLines          []EarningsLine       `json:"EarningsLines,omitempty"`
	LeaveAccrualLines      []LeaveAccrualLine   `json:"LeaveAccrualLines,omitempty"`
	LeaveEarningsLines     []LeaveEarningsLine  `json:"LeaveEarningsLines,omitempty"`
	ReimbursementLines     []ReimbursementLine  `json:"ReimbursementLines,omitempty"`
	SuperannuationLines    []SuperannuationLine `json:"SuperannuationLines,omitempty"`
	TaxLines               []TaxLine            `json:"TaxLines,omitempty"`
	TimesheetEarningsLines []EarningsLine       `json:"TimesheetEarningsLines,omitempty"`
}
