package shared

import (
	"time"
)

type BudgetDetail struct {
	Accounts                 []Account                     `json:"accounts"`
	Categories               []Category                    `json:"categories"`
	CategoryGroups           []CategoryGroup               `json:"category_groups"`
	CurrencyFormat           *CurrencyFormat               `json:"currency_format"`
	DateFormat               *DateFormat                   `json:"date_format"`
	FirstMonth               *time.Time                    `json:"first_month"`
	ID                       string                        `json:"id"`
	LastModifiedOn           *time.Time                    `json:"last_modified_on"`
	LastMonth                *time.Time                    `json:"last_month"`
	Months                   []MonthDetail                 `json:"months"`
	Name                     string                        `json:"name"`
	PayeeLocations           []PayeeLocation               `json:"payee_locations"`
	Payees                   []Payee                       `json:"payees"`
	ScheduledSubtransactions []ScheduledSubTransaction     `json:"scheduled_subtransactions"`
	ScheduledTransactions    []ScheduledTransactionSummary `json:"scheduled_transactions"`
	Subtransactions          []SubTransaction              `json:"subtransactions"`
	Transactions             []TransactionSummary          `json:"transactions"`
}
