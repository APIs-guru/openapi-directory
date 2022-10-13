package shared

type Period struct {
	ActualAmount   *float64 `json:"actual_amount"`
	Current        *bool    `json:"current"`
	EndDate        *string  `json:"end_date"`
	ForecastAmount *float64 `json:"forecast_amount"`
	OverBudget     *bool    `json:"over_budget"`
	OverBy         *float64 `json:"over_by"`
	PercentageUsed *float64 `json:"percentage_used"`
	RefundAmound   *float64 `json:"refund_amound"`
	StartDate      *string  `json:"start_date"`
	UnderBudget    *bool    `json:"under_budget"`
	UnderBy        *float64 `json:"under_by"`
}
