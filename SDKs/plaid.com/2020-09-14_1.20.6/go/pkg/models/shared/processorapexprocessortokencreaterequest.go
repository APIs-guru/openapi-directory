package shared

type ProcessorApexProcessorTokenCreateRequest struct {
	AccessToken string  `json:"access_token"`
	AccountID   string  `json:"account_id"`
	ClientID    *string `json:"client_id"`
	Secret      *string `json:"secret"`
}
