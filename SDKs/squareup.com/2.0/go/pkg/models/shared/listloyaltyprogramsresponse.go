package shared

type ListLoyaltyProgramsResponse struct {
	Errors   []Error          `json:"errors,omitempty"`
	Programs []LoyaltyProgram `json:"programs,omitempty"`
}
