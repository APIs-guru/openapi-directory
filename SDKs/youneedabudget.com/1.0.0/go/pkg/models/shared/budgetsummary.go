package shared

import (
	"time"
)

type BudgetSummary struct {
	Accounts       []Account       `json:"accounts"`
	CurrencyFormat *CurrencyFormat `json:"currency_format"`
	DateFormat     *DateFormat     `json:"date_format"`
	FirstMonth     *time.Time      `json:"first_month"`
	ID             string          `json:"id"`
	LastModifiedOn *time.Time      `json:"last_modified_on"`
	LastMonth      *time.Time      `json:"last_month"`
	Name           string          `json:"name"`
}
