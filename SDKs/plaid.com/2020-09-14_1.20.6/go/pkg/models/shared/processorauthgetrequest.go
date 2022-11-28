package shared

// ProcessorAuthGetRequest
// ProcessorAuthGetRequest defines the request schema for `/processor/auth/get`
type ProcessorAuthGetRequest struct {
	ClientID       *string `json:"client_id,omitempty"`
	ProcessorToken string  `json:"processor_token"`
	Secret         *string `json:"secret,omitempty"`
}
