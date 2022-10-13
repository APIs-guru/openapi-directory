package shared

type LoyaltyAccount struct {
	Balance                *int64                                `json:"balance"`
	CreatedAt              *string                               `json:"created_at"`
	CustomerID             *string                               `json:"customer_id"`
	EnrolledAt             *string                               `json:"enrolled_at"`
	ExpiringPointDeadlines []LoyaltyAccountExpiringPointDeadline `json:"expiring_point_deadlines"`
	ID                     *string                               `json:"id"`
	LifetimePoints         *int64                                `json:"lifetime_points"`
	Mapping                *LoyaltyAccountMapping                `json:"mapping"`
	ProgramID              string                                `json:"program_id"`
	UpdatedAt              *string                               `json:"updated_at"`
}
