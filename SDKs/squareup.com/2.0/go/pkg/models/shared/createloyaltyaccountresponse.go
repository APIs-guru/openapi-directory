package shared



type CreateLoyaltyAccountResponse struct {
    Errors []Error `json:"errors,omitempty"`
    LoyaltyAccount *LoyaltyAccount `json:"loyalty_account,omitempty"`
    
}

