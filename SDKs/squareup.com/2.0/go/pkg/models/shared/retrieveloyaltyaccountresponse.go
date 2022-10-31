package shared

type RetrieveLoyaltyAccountResponse struct {
	Errors         []Error         `json:"errors,omitempty"`
	LoyaltyAccount *LoyaltyAccount `json:"loyalty_account,omitempty"`
}
