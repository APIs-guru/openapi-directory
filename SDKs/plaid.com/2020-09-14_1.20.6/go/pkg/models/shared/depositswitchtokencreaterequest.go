package shared

// DepositSwitchTokenCreateRequest
// DepositSwitchTokenCreateRequest defines the request schema for `/deposit_switch/token/create`
type DepositSwitchTokenCreateRequest struct {
	ClientID        *string `json:"client_id,omitempty"`
	DepositSwitchID string  `json:"deposit_switch_id"`
	Secret          *string `json:"secret,omitempty"`
}
