package shared

type BudgetAnalysisPackage struct {
	Category   *Category       `json:"category"`
	Expense    *BudgetAnalysis `json:"expense"`
	Income     *BudgetAnalysis `json:"income"`
	IsTransfer *bool           `json:"is_transfer"`
}
