package shared

type AuthenticationTokenResponseData struct {
	Token string `json:"token"`
}

type AuthenticationTokenResponse struct {
	Data    AuthenticationTokenResponseData `json:"data"`
	Success bool                            `json:"success"`
}
