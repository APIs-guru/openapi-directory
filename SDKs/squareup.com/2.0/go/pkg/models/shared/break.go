package shared

type Break struct {
	BreakTypeID      string  `json:"break_type_id"`
	EndAt            *string `json:"end_at,omitempty"`
	ExpectedDuration string  `json:"expected_duration"`
	ID               *string `json:"id,omitempty"`
	IsPaid           bool    `json:"is_paid"`
	Name             string  `json:"name"`
	StartAt          string  `json:"start_at"`
}
