package shared

type SandboxPublicTokenCreateRequestOptions struct {
	OverridePassword *string                                             `json:"override_password"`
	OverrideUsername *string                                             `json:"override_username"`
	Transactions     *SandboxPublicTokenCreateRequestOptionsTransactions `json:"transactions"`
	Webhook          *string                                             `json:"webhook"`
}
