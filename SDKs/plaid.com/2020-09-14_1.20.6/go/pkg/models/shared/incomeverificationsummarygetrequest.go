package shared

// IncomeVerificationSummaryGetRequest
// IncomeVerificationSummaryGetRequest defines the request schema for `/income/verification/summary/get`.
type IncomeVerificationSummaryGetRequest struct {
	ClientID             *string `json:"client_id,omitempty"`
	IncomeVerificationID string  `json:"income_verification_id"`
	Secret               *string `json:"secret,omitempty"`
}
