package operations



type PostAuthPollRequestBody struct {
    Token *string `json:"token,omitempty"`
    
}

type PostAuthPollRequest struct {
    Request PostAuthPollRequestBody `request:"mediaType=application/json"`
    
}

type PostAuthPoll200ApplicationJSON struct {
    Apikey *string `json:"apikey,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

type PostAuthPollResponse struct {
    ContentType string 
    PostAuthPoll200ApplicationJSONObject *PostAuthPoll200ApplicationJSON 
    StatusCode int64 
    
}

