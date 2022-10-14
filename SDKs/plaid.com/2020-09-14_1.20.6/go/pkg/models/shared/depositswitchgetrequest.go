package shared

type DepositSwitchGetRequest struct {
	ClientID        *string `json:"client_id,omitempty"`
	DepositSwitchID string  `json:"deposit_switch_id"`
	Secret          *string `json:"secret,omitempty"`
}
