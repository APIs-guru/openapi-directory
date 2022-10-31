package shared



type BudgetSummaryResponseData struct {
    Budgets []BudgetSummary `json:"budgets"`
    DefaultBudget *BudgetSummary `json:"default_budget,omitempty"`
    
}

type BudgetSummaryResponse struct {
    Data BudgetSummaryResponseData `json:"data"`
    
}

