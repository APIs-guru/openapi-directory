package shared

// SandboxPublicTokenCreateRequestOptions
// An optional set of options to be used when configuring the Item. If specified, must not be `null`.
type SandboxPublicTokenCreateRequestOptions struct {
	OverridePassword *string                                             `json:"override_password,omitempty"`
	OverrideUsername *string                                             `json:"override_username,omitempty"`
	Transactions     *SandboxPublicTokenCreateRequestOptionsTransactions `json:"transactions,omitempty"`
	Webhook          *string                                             `json:"webhook,omitempty"`
}
