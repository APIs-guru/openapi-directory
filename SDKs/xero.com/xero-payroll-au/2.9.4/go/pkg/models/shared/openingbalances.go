package shared



type OpeningBalances struct {
    DeductionLines []DeductionLine `json:"DeductionLines,omitempty"`
    EarningsLines []EarningsLine `json:"EarningsLines,omitempty"`
    LeaveLines []LeaveLine `json:"LeaveLines,omitempty"`
    OpeningBalanceDate *string `json:"OpeningBalanceDate,omitempty"`
    ReimbursementLines []ReimbursementLine `json:"ReimbursementLines,omitempty"`
    SuperLines []SuperLine `json:"SuperLines,omitempty"`
    Tax *string `json:"Tax,omitempty"`
    
}

