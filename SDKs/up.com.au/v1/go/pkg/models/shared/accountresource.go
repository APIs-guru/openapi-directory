package shared

import (
	"time"
)

type AccountResourceAttributes struct {
	AccountType interface{} `json:"accountType"`
	Balance     MoneyObject `json:"balance"`
	CreatedAt   time.Time   `json:"createdAt"`
	DisplayName string      `json:"displayName"`
}

type AccountResourceLinks struct {
	Self string `json:"self"`
}

type AccountResourceRelationshipsTransactionsLinks struct {
	Related string `json:"related"`
}

type AccountResourceRelationshipsTransactions struct {
	Links *AccountResourceRelationshipsTransactionsLinks `json:"links"`
}

type AccountResourceRelationships struct {
	Transactions AccountResourceRelationshipsTransactions `json:"transactions"`
}

type AccountResource struct {
	Attributes    AccountResourceAttributes    `json:"attributes"`
	ID            string                       `json:"id"`
	Links         *AccountResourceLinks        `json:"links"`
	Relationships AccountResourceRelationships `json:"relationships"`
	Type          string                       `json:"type"`
}
