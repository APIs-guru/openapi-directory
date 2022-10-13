package shared

type LeavePeriod struct {
	LeavePeriodStatus  *LeavePeriodStatusEnum `json:"LeavePeriodStatus"`
	NumberOfUnits      *float64               `json:"NumberOfUnits"`
	PayPeriodEndDate   *string                `json:"PayPeriodEndDate"`
	PayPeriodStartDate *string                `json:"PayPeriodStartDate"`
}
