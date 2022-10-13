package operations

type PostAuthPollRequestBody struct {
	Token *string `json:"token"`
}

type PostAuthPollRequest struct {
	Request PostAuthPollRequestBody `request:"mediaType=application/json"`
}

type PostAuthPoll200ApplicationJSON struct {
	Apikey   *string `json:"apikey"`
	Username *string `json:"username"`
}

type PostAuthPollResponse struct {
	ContentType                          string
	PostAuthPoll200ApplicationJSONObject *PostAuthPoll200ApplicationJSON
	StatusCode                           int64
}
