package shared

// SandboxItemResetLoginRequest
// SandboxItemResetLoginRequest defines the request schema for `/sandbox/item/reset_login`
type SandboxItemResetLoginRequest struct {
	AccessToken string  `json:"access_token"`
	ClientID    *string `json:"client_id,omitempty"`
	Secret      *string `json:"secret,omitempty"`
}
