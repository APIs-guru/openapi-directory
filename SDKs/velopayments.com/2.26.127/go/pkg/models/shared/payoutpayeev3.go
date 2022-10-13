package shared

type PayoutPayeeV3 struct {
	Company    *PayoutCompanyV3    `json:"company"`
	Individual *PayoutIndividualV3 `json:"individual"`
	PayeeID    string              `json:"payeeId"`
}
