package shared



type BudgetAnalysis struct {
    AverageActualAmount *float64 `json:"average_actual_amount,omitempty"`
    AverageForecastAmount *float64 `json:"average_forecast_amount,omitempty"`
    EndDate *string `json:"end_date,omitempty"`
    Periods []Period `json:"periods,omitempty"`
    StartDate *string `json:"start_date,omitempty"`
    TotalActualAmount *float64 `json:"total_actual_amount,omitempty"`
    TotalForecastAmount *float64 `json:"total_forecast_amount,omitempty"`
    TotalOverBy *float64 `json:"total_over_by,omitempty"`
    TotalUnderBy *float64 `json:"total_under_by,omitempty"`
    
}

