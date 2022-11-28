package shared

// ProcessorBalanceGetRequest
// ProcessorBalanceGetRequest defines the request schema for `/processor/balance/get`
type ProcessorBalanceGetRequest struct {
	ClientID       *string `json:"client_id,omitempty"`
	ProcessorToken string  `json:"processor_token"`
	Secret         *string `json:"secret,omitempty"`
}
