package shared



type SearchLoyaltyAccountsResponse struct {
    Cursor *string `json:"cursor,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    LoyaltyAccounts []LoyaltyAccount `json:"loyalty_accounts,omitempty"`
    
}

