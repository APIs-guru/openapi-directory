package shared

type BudgetAnalysis struct {
	AverageActualAmount   *float64 `json:"average_actual_amount"`
	AverageForecastAmount *float64 `json:"average_forecast_amount"`
	EndDate               *string  `json:"end_date"`
	Periods               []Period `json:"periods"`
	StartDate             *string  `json:"start_date"`
	TotalActualAmount     *float64 `json:"total_actual_amount"`
	TotalForecastAmount   *float64 `json:"total_forecast_amount"`
	TotalOverBy           *float64 `json:"total_over_by"`
	TotalUnderBy          *float64 `json:"total_under_by"`
}
