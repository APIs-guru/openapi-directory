package shared

type CreateMobileAuthorizationCodeResponse struct {
	AuthorizationCode *string `json:"authorization_code"`
	Error             *Error  `json:"error"`
	ExpiresAt         *string `json:"expires_at"`
}
