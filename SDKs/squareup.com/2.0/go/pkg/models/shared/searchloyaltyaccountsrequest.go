package shared



type SearchLoyaltyAccountsRequest struct {
    Cursor *string `json:"cursor,omitempty"`
    Limit *int64 `json:"limit,omitempty"`
    Query *SearchLoyaltyAccountsRequestLoyaltyAccountQuery `json:"query,omitempty"`
    
}

