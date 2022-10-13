package shared

type CreateLoyaltyAccountResponse struct {
	Errors         []Error         `json:"errors"`
	LoyaltyAccount *LoyaltyAccount `json:"loyalty_account"`
}
