package shared

// ProcessorStripeBankAccountTokenCreateRequest
// ProcessorStripeBankAccountTokenCreateRequest defines the request schema for `/processor/stripe/bank_account/create`
type ProcessorStripeBankAccountTokenCreateRequest struct {
	AccessToken string  `json:"access_token"`
	AccountID   string  `json:"account_id"`
	ClientID    *string `json:"client_id,omitempty"`
	Secret      *string `json:"secret,omitempty"`
}
