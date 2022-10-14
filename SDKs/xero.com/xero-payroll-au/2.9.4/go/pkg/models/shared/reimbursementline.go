package shared

type ReimbursementLine struct {
	Amount              *float64 `json:"Amount,omitempty"`
	Description         *string  `json:"Description,omitempty"`
	ExpenseAccount      *string  `json:"ExpenseAccount,omitempty"`
	ReimbursementTypeID *string  `json:"ReimbursementTypeID,omitempty"`
}
