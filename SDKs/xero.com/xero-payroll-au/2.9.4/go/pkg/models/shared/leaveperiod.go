package shared



type LeavePeriod struct {
    LeavePeriodStatus *LeavePeriodStatusEnum `json:"LeavePeriodStatus,omitempty"`
    NumberOfUnits *float64 `json:"NumberOfUnits,omitempty"`
    PayPeriodEndDate *string `json:"PayPeriodEndDate,omitempty"`
    PayPeriodStartDate *string `json:"PayPeriodStartDate,omitempty"`
    
}

