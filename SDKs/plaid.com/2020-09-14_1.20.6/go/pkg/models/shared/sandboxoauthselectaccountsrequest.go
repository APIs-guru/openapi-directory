package shared

type SandboxOauthSelectAccountsRequest struct {
	Accounts     []string `json:"accounts"`
	OauthStateID string   `json:"oauth_state_id"`
}
