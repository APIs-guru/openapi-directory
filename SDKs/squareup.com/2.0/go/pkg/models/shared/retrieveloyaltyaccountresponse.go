package shared

type RetrieveLoyaltyAccountResponse struct {
	Errors         []Error         `json:"errors"`
	LoyaltyAccount *LoyaltyAccount `json:"loyalty_account"`
}
