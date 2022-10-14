package shared

type CreateMobileAuthorizationCodeResponse struct {
	AuthorizationCode *string `json:"authorization_code,omitempty"`
	Error             *Error  `json:"error,omitempty"`
	ExpiresAt         *string `json:"expires_at,omitempty"`
}
