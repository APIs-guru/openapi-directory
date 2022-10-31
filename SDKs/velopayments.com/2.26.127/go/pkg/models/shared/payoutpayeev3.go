package shared



type PayoutPayeeV3 struct {
    Company *PayoutCompanyV3 `json:"company,omitempty"`
    Individual *PayoutIndividualV3 `json:"individual,omitempty"`
    PayeeID string `json:"payeeId"`
    
}

