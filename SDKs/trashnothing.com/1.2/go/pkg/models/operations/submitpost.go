package operations



type SubmitPostRequestBody struct {
    Content *string `multipartForm:"name=content"`
    ExpiresIn *string `multipartForm:"name=expires_in"`
    FairOffer *int64 `multipartForm:"name=fair_offer"`
    GroupIds *string `multipartForm:"name=group_ids"`
    Latitude *float64 `multipartForm:"name=latitude"`
    Location string `multipartForm:"name=location"`
    Longitude *float64 `multipartForm:"name=longitude"`
    PhotoIds *string `multipartForm:"name=photo_ids"`
    Preferences *string `multipartForm:"name=preferences"`
    Session string `multipartForm:"name=session"`
    Title string `multipartForm:"name=title"`
    Type string `multipartForm:"name=type"`
    
}

type SubmitPostRequest struct {
    Request *SubmitPostRequestBody `request:"mediaType=multipart/form-data"`
    
}

type SubmitPost200ApplicationJSON struct {
    Identifier *string `json:"identifier,omitempty"`
    Message *string `json:"message,omitempty"`
    PreferenceKey *string `json:"preference_key,omitempty"`
    Result *string `json:"result,omitempty"`
    Session map[string]string `json:"session,omitempty"`
    
}

type SubmitPostResponse struct {
    ContentType string 
    StatusCode int64 
    SubmitPost200ApplicationJSONObject *SubmitPost200ApplicationJSON 
    
}

