package shared

// PayoutPayeeV3
// Payee data associated with a payment. Either individual or company must be populated
type PayoutPayeeV3 struct {
	Company    *PayoutCompanyV3    `json:"company,omitempty"`
	Individual *PayoutIndividualV3 `json:"individual,omitempty"`
	PayeeID    string              `json:"payeeId"`
}
