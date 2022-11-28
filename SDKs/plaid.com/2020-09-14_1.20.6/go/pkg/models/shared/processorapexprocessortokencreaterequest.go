package shared

// ProcessorApexProcessorTokenCreateRequest
// ProcessorApexProcessorTokenCreateRequest defines the request schema for `/processor/apex/processor_token/create`
type ProcessorApexProcessorTokenCreateRequest struct {
	AccessToken string  `json:"access_token"`
	AccountID   string  `json:"account_id"`
	ClientID    *string `json:"client_id,omitempty"`
	Secret      *string `json:"secret,omitempty"`
}
