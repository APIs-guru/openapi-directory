package shared

type BudgetSummaryResponseData struct {
	Budgets       []BudgetSummary `json:"budgets"`
	DefaultBudget *BudgetSummary  `json:"default_budget"`
}

type BudgetSummaryResponse struct {
	Data BudgetSummaryResponseData `json:"data"`
}
