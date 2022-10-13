package shared

type SearchLoyaltyRewardsRequest struct {
	Cursor *string                                        `json:"cursor"`
	Limit  *int64                                         `json:"limit"`
	Query  *SearchLoyaltyRewardsRequestLoyaltyRewardQuery `json:"query"`
}
