package shared

// IncomeVerificationPaystubsGetRequest
// IncomeVerificationPaystubsGetRequest defines the request schema for `/income/verification/paystubs/get`.
type IncomeVerificationPaystubsGetRequest struct {
	ClientID             *string `json:"client_id,omitempty"`
	IncomeVerificationID string  `json:"income_verification_id"`
	Secret               *string `json:"secret,omitempty"`
}
