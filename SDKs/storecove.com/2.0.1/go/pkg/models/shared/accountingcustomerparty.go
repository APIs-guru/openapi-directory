package shared

type AccountingCustomerParty struct {
	AccountID         *string            `json:"accountId"`
	Party             Party              `json:"party"`
	PublicIdentifiers []PublicIdentifier `json:"publicIdentifiers"`
}
