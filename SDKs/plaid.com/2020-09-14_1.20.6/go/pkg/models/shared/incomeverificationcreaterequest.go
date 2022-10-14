package shared

type IncomeVerificationCreateRequest struct {
	ClientID *string `json:"client_id,omitempty"`
	Secret   *string `json:"secret,omitempty"`
	Webhook  string  `json:"webhook"`
}
