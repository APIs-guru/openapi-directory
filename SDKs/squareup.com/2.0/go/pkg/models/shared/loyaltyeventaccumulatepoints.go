package shared

type LoyaltyEventAccumulatePoints struct {
	LoyaltyProgramID *string `json:"loyalty_program_id,omitempty"`
	OrderID          *string `json:"order_id,omitempty"`
	Points           *int64  `json:"points,omitempty"`
}
