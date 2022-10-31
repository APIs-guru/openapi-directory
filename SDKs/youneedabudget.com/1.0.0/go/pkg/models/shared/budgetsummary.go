package shared

import (
	"time"
)

type BudgetSummary struct {
	Accounts       []Account       `json:"accounts,omitempty"`
	CurrencyFormat *CurrencyFormat `json:"currency_format,omitempty"`
	DateFormat     *DateFormat     `json:"date_format,omitempty"`
	FirstMonth     *time.Time      `json:"first_month,omitempty"`
	ID             string          `json:"id"`
	LastModifiedOn *time.Time      `json:"last_modified_on,omitempty"`
	LastMonth      *time.Time      `json:"last_month,omitempty"`
	Name           string          `json:"name"`
}
