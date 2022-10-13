package shared

type IncomeVerificationCreateRequest struct {
	ClientID *string `json:"client_id"`
	Secret   *string `json:"secret"`
	Webhook  string  `json:"webhook"`
}
