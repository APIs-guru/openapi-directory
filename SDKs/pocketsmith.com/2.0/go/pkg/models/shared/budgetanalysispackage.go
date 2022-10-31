package shared



type BudgetAnalysisPackage struct {
    Category *Category `json:"category,omitempty"`
    Expense *BudgetAnalysis `json:"expense,omitempty"`
    Income *BudgetAnalysis `json:"income,omitempty"`
    IsTransfer *bool `json:"is_transfer,omitempty"`
    
}

