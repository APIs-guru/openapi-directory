package shared

type SearchLoyaltyAccountsResponse struct {
	Cursor          *string          `json:"cursor"`
	Errors          []Error          `json:"errors"`
	LoyaltyAccounts []LoyaltyAccount `json:"loyalty_accounts"`
}
