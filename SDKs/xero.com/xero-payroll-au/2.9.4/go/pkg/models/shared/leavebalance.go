package shared



type LeaveBalance struct {
    LeaveName *string `json:"LeaveName,omitempty"`
    LeaveTypeID *string `json:"LeaveTypeID,omitempty"`
    NumberOfUnits *float64 `json:"NumberOfUnits,omitempty"`
    TypeOfUnits *string `json:"TypeOfUnits,omitempty"`
    
}

