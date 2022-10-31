package shared



type LoyaltyAccount struct {
    Balance *int64 `json:"balance,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    CustomerID *string `json:"customer_id,omitempty"`
    EnrolledAt *string `json:"enrolled_at,omitempty"`
    ExpiringPointDeadlines []LoyaltyAccountExpiringPointDeadline `json:"expiring_point_deadlines,omitempty"`
    ID *string `json:"id,omitempty"`
    LifetimePoints *int64 `json:"lifetime_points,omitempty"`
    Mapping *LoyaltyAccountMapping `json:"mapping,omitempty"`
    ProgramID string `json:"program_id"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    
}

