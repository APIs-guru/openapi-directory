package shared

type PayItem struct {
	DeductionTypes     []DeductionType     `json:"DeductionTypes"`
	EarningsRates      []EarningsRate      `json:"EarningsRates"`
	LeaveTypes         []LeaveType         `json:"LeaveTypes"`
	ReimbursementTypes []ReimbursementType `json:"ReimbursementTypes"`
}
