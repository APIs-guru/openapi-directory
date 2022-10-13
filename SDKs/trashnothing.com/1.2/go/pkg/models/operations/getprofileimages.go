package operations

type GetProfileImages200ApplicationJSON struct {
	Image  *string `json:"image"`
	Source *string `json:"source"`
}

type GetProfileImagesResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetProfileImages200ApplicationJSONObjects []GetProfileImages200ApplicationJSON
}
