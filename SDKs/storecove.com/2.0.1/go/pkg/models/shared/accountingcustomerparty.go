package shared

// AccountingCustomerParty
// The customer receiving the invoice.
type AccountingCustomerParty struct {
	AccountID         *string            `json:"accountId,omitempty"`
	Party             Party              `json:"party"`
	PublicIdentifiers []PublicIdentifier `json:"publicIdentifiers,omitempty"`
}
