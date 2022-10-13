package operations

type PostAuthStartRequestBody struct {
	Email             *string `json:"email"`
	EmailConfirmation *bool   `json:"email_confirmation"`
}

type PostAuthStartRequest struct {
	Request PostAuthStartRequestBody `request:"mediaType=application/json"`
}

type PostAuthStart200ApplicationJSON struct {
	ConfirmURL *string `json:"confirm_url"`
	Token      *string `json:"token"`
}

type PostAuthStartResponse struct {
	ContentType                           string
	PostAuthStart200ApplicationJSONObject *PostAuthStart200ApplicationJSON
	StatusCode                            int64
}
