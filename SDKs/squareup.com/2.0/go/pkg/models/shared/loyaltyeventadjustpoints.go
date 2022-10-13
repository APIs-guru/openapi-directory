package shared

type LoyaltyEventAdjustPoints struct {
	LoyaltyProgramID *string `json:"loyalty_program_id"`
	Points           int64   `json:"points"`
	Reason           *string `json:"reason"`
}
