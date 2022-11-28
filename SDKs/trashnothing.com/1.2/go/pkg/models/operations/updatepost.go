package operations

type UpdatePostPathParams struct {
	PostID string `pathParam:"style=simple,explode=false,name=post_id"`
}

type UpdatePostRequestBody struct {
	Content     *string  `multipartForm:"name=content"`
	ExpiresIn   *string  `multipartForm:"name=expires_in"`
	FairOffer   *int64   `multipartForm:"name=fair_offer"`
	Latitude    *float64 `multipartForm:"name=latitude"`
	Location    string   `multipartForm:"name=location"`
	Longitude   *float64 `multipartForm:"name=longitude"`
	PhotoIds    *string  `multipartForm:"name=photo_ids"`
	Preferences *string  `multipartForm:"name=preferences"`
	Session     string   `multipartForm:"name=session"`
	Title       string   `multipartForm:"name=title"`
	Type        string   `multipartForm:"name=type"`
}

type UpdatePost200ApplicationJSON struct {
	Identifier    *string           `json:"identifier,omitempty"`
	Message       *string           `json:"message,omitempty"`
	PreferenceKey *string           `json:"preference_key,omitempty"`
	Result        *string           `json:"result,omitempty"`
	Session       map[string]string `json:"session,omitempty"`
}

type UpdatePostRequest struct {
	PathParams UpdatePostPathParams
	Request    UpdatePostRequestBody `request:"mediaType=multipart/form-data"`
}

type UpdatePostResponse struct {
	ContentType                        string
	StatusCode                         int64
	UpdatePost200ApplicationJSONObject *UpdatePost200ApplicationJSON
}
