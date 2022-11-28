package shared

// IncomeVerificationCreateRequest
// IncomeVerificationCreateRequest defines the request schema for `/income/verification/create`
type IncomeVerificationCreateRequest struct {
	ClientID *string `json:"client_id,omitempty"`
	Secret   *string `json:"secret,omitempty"`
	Webhook  string  `json:"webhook"`
}
