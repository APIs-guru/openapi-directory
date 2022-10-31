package shared



type SearchLoyaltyAccountsRequestLoyaltyAccountQuery struct {
    CustomerIds []string `json:"customer_ids,omitempty"`
    Mappings []LoyaltyAccountMapping `json:"mappings,omitempty"`
    
}

