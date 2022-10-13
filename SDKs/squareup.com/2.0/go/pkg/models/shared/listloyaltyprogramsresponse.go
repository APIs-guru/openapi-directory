package shared

type ListLoyaltyProgramsResponse struct {
	Errors   []Error          `json:"errors"`
	Programs []LoyaltyProgram `json:"programs"`
}
