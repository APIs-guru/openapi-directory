package shared

type SearchLoyaltyRewardsRequest struct {
	Cursor *string                                        `json:"cursor,omitempty"`
	Limit  *int64                                         `json:"limit,omitempty"`
	Query  *SearchLoyaltyRewardsRequestLoyaltyRewardQuery `json:"query,omitempty"`
}
