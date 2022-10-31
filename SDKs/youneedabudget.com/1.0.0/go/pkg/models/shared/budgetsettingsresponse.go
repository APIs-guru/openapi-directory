package shared

type BudgetSettingsResponseData struct {
	Settings BudgetSettings `json:"settings"`
}

type BudgetSettingsResponse struct {
	Data BudgetSettingsResponseData `json:"data"`
}
