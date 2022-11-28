package shared

// DepositSwitchGetRequest
// DepositSwitchGetRequest defines the request schema for `/deposit_switch/get`
type DepositSwitchGetRequest struct {
	ClientID        *string `json:"client_id,omitempty"`
	DepositSwitchID string  `json:"deposit_switch_id"`
	Secret          *string `json:"secret,omitempty"`
}
