package shared

type LoyaltyEventAccumulatePoints struct {
	LoyaltyProgramID *string `json:"loyalty_program_id"`
	OrderID          *string `json:"order_id"`
	Points           *int64  `json:"points"`
}
