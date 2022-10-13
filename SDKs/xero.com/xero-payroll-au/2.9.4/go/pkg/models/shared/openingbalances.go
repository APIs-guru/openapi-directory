package shared

type OpeningBalances struct {
	DeductionLines     []DeductionLine     `json:"DeductionLines"`
	EarningsLines      []EarningsLine      `json:"EarningsLines"`
	LeaveLines         []LeaveLine         `json:"LeaveLines"`
	OpeningBalanceDate *string             `json:"OpeningBalanceDate"`
	ReimbursementLines []ReimbursementLine `json:"ReimbursementLines"`
	SuperLines         []SuperLine         `json:"SuperLines"`
	Tax                *string             `json:"Tax"`
}
