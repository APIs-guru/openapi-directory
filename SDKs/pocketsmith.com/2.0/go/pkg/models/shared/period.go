package shared

type Period struct {
	ActualAmount   *float64 `json:"actual_amount,omitempty"`
	Current        *bool    `json:"current,omitempty"`
	EndDate        *string  `json:"end_date,omitempty"`
	ForecastAmount *float64 `json:"forecast_amount,omitempty"`
	OverBudget     *bool    `json:"over_budget,omitempty"`
	OverBy         *float64 `json:"over_by,omitempty"`
	PercentageUsed *float64 `json:"percentage_used,omitempty"`
	RefundAmound   *float64 `json:"refund_amound,omitempty"`
	StartDate      *string  `json:"start_date,omitempty"`
	UnderBudget    *bool    `json:"under_budget,omitempty"`
	UnderBy        *float64 `json:"under_by,omitempty"`
}
