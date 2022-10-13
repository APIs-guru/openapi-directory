package shared

type PayslipLines struct {
	DeductionLines         []DeductionLine      `json:"DeductionLines"`
	EarningsLines          []EarningsLine       `json:"EarningsLines"`
	LeaveAccrualLines      []LeaveAccrualLine   `json:"LeaveAccrualLines"`
	LeaveEarningsLines     []LeaveEarningsLine  `json:"LeaveEarningsLines"`
	ReimbursementLines     []ReimbursementLine  `json:"ReimbursementLines"`
	SuperannuationLines    []SuperannuationLine `json:"SuperannuationLines"`
	TaxLines               []TaxLine            `json:"TaxLines"`
	TimesheetEarningsLines []EarningsLine       `json:"TimesheetEarningsLines"`
}
