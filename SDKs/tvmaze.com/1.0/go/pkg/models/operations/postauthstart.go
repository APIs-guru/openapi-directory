package operations

type PostAuthStartRequestBody struct {
	Email             *string `json:"email,omitempty"`
	EmailConfirmation *bool   `json:"email_confirmation,omitempty"`
}

type PostAuthStart200ApplicationJSON struct {
	ConfirmURL *string `json:"confirm_url,omitempty"`
	Token      *string `json:"token,omitempty"`
}

type PostAuthStartRequest struct {
	Request PostAuthStartRequestBody `request:"mediaType=application/json"`
}

type PostAuthStartResponse struct {
	ContentType                           string
	PostAuthStart200ApplicationJSONObject *PostAuthStart200ApplicationJSON
	StatusCode                            int64
}
