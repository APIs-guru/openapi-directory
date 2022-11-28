package shared

// IncomeVerificationRefreshRequest
// IncomeVerificationRefreshRequest defines the request schema for `/income/verification/refresh`
type IncomeVerificationRefreshRequest struct {
	ClientID             *string `json:"client_id,omitempty"`
	IncomeVerificationID string  `json:"income_verification_id"`
	Secret               *string `json:"secret,omitempty"`
}
