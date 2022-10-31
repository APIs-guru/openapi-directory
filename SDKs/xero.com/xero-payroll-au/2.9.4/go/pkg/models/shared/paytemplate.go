package shared

type PayTemplate struct {
	DeductionLines     []DeductionLine     `json:"DeductionLines,omitempty"`
	EarningsLines      []EarningsLine      `json:"EarningsLines,omitempty"`
	LeaveLines         []LeaveLine         `json:"LeaveLines,omitempty"`
	ReimbursementLines []ReimbursementLine `json:"ReimbursementLines,omitempty"`
	SuperLines         []SuperLine         `json:"SuperLines,omitempty"`
}
