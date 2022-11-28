package operations

type PostAuthPollRequestBody struct {
	Token *string `json:"token,omitempty"`
}

type PostAuthPoll200ApplicationJSON struct {
	Apikey   *string `json:"apikey,omitempty"`
	Username *string `json:"username,omitempty"`
}

type PostAuthPollRequest struct {
	Request PostAuthPollRequestBody `request:"mediaType=application/json"`
}

type PostAuthPollResponse struct {
	ContentType                          string
	PostAuthPoll200ApplicationJSONObject *PostAuthPoll200ApplicationJSON
	StatusCode                           int64
}
