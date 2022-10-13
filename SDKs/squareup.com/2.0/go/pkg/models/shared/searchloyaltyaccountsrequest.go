package shared

type SearchLoyaltyAccountsRequest struct {
	Cursor *string                                          `json:"cursor"`
	Limit  *int64                                           `json:"limit"`
	Query  *SearchLoyaltyAccountsRequestLoyaltyAccountQuery `json:"query"`
}
