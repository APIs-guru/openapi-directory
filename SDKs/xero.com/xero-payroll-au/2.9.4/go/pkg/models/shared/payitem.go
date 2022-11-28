package shared

type PayItem struct {
	DeductionTypes     []DeductionType     `json:"DeductionTypes,omitempty"`
	EarningsRates      []EarningsRate      `json:"EarningsRates,omitempty"`
	LeaveTypes         []LeaveType         `json:"LeaveTypes,omitempty"`
	ReimbursementTypes []ReimbursementType `json:"ReimbursementTypes,omitempty"`
}

type PayItemInput struct {
	DeductionTypes     []DeductionTypeInput     `json:"DeductionTypes,omitempty"`
	EarningsRates      []EarningsRateInput      `json:"EarningsRates,omitempty"`
	LeaveTypes         []LeaveTypeInput         `json:"LeaveTypes,omitempty"`
	ReimbursementTypes []ReimbursementTypeInput `json:"ReimbursementTypes,omitempty"`
}
