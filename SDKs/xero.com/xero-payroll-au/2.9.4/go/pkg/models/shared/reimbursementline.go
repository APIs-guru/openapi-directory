package shared

type ReimbursementLine struct {
	Amount              *float64 `json:"Amount"`
	Description         *string  `json:"Description"`
	ExpenseAccount      *string  `json:"ExpenseAccount"`
	ReimbursementTypeID *string  `json:"ReimbursementTypeID"`
}
