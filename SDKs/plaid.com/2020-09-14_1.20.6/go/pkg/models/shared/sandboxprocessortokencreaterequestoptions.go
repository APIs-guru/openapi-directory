package shared

// SandboxProcessorTokenCreateRequestOptions
// An optional set of options to be used when configuring the Item. If specified, must not be `null`.
type SandboxProcessorTokenCreateRequestOptions struct {
	OverridePassword *string `json:"override_password,omitempty"`
	OverrideUsername *string `json:"override_username,omitempty"`
}
