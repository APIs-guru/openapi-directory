package shared

type BreakType struct {
	BreakName        string  `json:"break_name"`
	CreatedAt        *string `json:"created_at"`
	ExpectedDuration string  `json:"expected_duration"`
	ID               *string `json:"id"`
	IsPaid           bool    `json:"is_paid"`
	LocationID       string  `json:"location_id"`
	UpdatedAt        *string `json:"updated_at"`
	Version          *int64  `json:"version"`
}
