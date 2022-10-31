package shared

type BudgetSettings struct {
	CurrencyFormat CurrencyFormat `json:"currency_format"`
	DateFormat     DateFormat     `json:"date_format"`
}
