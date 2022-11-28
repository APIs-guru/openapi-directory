package shared

// SandboxOauthSelectAccountsRequest
// Defines the request schema for `sandbox/oauth/select_accounts`
type SandboxOauthSelectAccountsRequest struct {
	Accounts     []string `json:"accounts"`
	OauthStateID string   `json:"oauth_state_id"`
}
