package shared



type SandboxPublicTokenCreateRequestOptions struct {
    OverridePassword *string `json:"override_password,omitempty"`
    OverrideUsername *string `json:"override_username,omitempty"`
    Transactions *SandboxPublicTokenCreateRequestOptionsTransactions `json:"transactions,omitempty"`
    Webhook *string `json:"webhook,omitempty"`
    
}

