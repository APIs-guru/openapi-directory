package shared

type SandboxProcessorTokenCreateRequestOptions struct {
	OverridePassword *string `json:"override_password"`
	OverrideUsername *string `json:"override_username"`
}
