package shared



type PayItem struct {
    DeductionTypes []DeductionType `json:"DeductionTypes,omitempty"`
    EarningsRates []EarningsRate `json:"EarningsRates,omitempty"`
    LeaveTypes []LeaveType `json:"LeaveTypes,omitempty"`
    ReimbursementTypes []ReimbursementType `json:"ReimbursementTypes,omitempty"`
    
}

