package shared



type LeaveAccrualLine struct {
    AutoCalculate *bool `json:"AutoCalculate,omitempty"`
    LeaveTypeID *string `json:"LeaveTypeID,omitempty"`
    NumberOfUnits *float64 `json:"NumberOfUnits,omitempty"`
    
}

