package shared

import (
	"time"
)

type BudgetDetail struct {
	Accounts                 []Account                     `json:"accounts,omitempty"`
	Categories               []Category                    `json:"categories,omitempty"`
	CategoryGroups           []CategoryGroup               `json:"category_groups,omitempty"`
	CurrencyFormat           *CurrencyFormat               `json:"currency_format,omitempty"`
	DateFormat               *DateFormat                   `json:"date_format,omitempty"`
	FirstMonth               *time.Time                    `json:"first_month,omitempty"`
	ID                       string                        `json:"id"`
	LastModifiedOn           *time.Time                    `json:"last_modified_on,omitempty"`
	LastMonth                *time.Time                    `json:"last_month,omitempty"`
	Months                   []MonthDetail                 `json:"months,omitempty"`
	Name                     string                        `json:"name"`
	PayeeLocations           []PayeeLocation               `json:"payee_locations,omitempty"`
	Payees                   []Payee                       `json:"payees,omitempty"`
	ScheduledSubtransactions []ScheduledSubTransaction     `json:"scheduled_subtransactions,omitempty"`
	ScheduledTransactions    []ScheduledTransactionSummary `json:"scheduled_transactions,omitempty"`
	Subtransactions          []SubTransaction              `json:"subtransactions,omitempty"`
	Transactions             []TransactionSummary          `json:"transactions,omitempty"`
}
