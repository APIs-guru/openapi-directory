package shared

type RetrieveLoyaltyProgramResponse struct {
	Errors  []Error         `json:"errors"`
	Program *LoyaltyProgram `json:"program"`
}
