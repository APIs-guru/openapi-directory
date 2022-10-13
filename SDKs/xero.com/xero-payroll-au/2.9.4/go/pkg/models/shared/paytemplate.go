package shared

type PayTemplate struct {
	DeductionLines     []DeductionLine     `json:"DeductionLines"`
	EarningsLines      []EarningsLine      `json:"EarningsLines"`
	LeaveLines         []LeaveLine         `json:"LeaveLines"`
	ReimbursementLines []ReimbursementLine `json:"ReimbursementLines"`
	SuperLines         []SuperLine         `json:"SuperLines"`
}
