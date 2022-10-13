package shared

type IncomeVerificationPaystubsGetRequest struct {
	ClientID             *string `json:"client_id"`
	IncomeVerificationID string  `json:"income_verification_id"`
	Secret               *string `json:"secret"`
}
