package operations

type SavePostLocationRequestBody struct {
	Latitude  float64 `multipartForm:"name=latitude"`
	Longitude float64 `multipartForm:"name=longitude"`
	Name      string  `multipartForm:"name=name"`
}

type SavePostLocation200ApplicationJSON struct {
	Latitude  *float64 `json:"latitude,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
	Name      *string  `json:"name,omitempty"`
}

type SavePostLocationRequest struct {
	Request SavePostLocationRequestBody `request:"mediaType=multipart/form-data"`
}

type SavePostLocationResponse struct {
	ContentType                               string
	StatusCode                                int64
	SavePostLocation200ApplicationJSONObjects []SavePostLocation200ApplicationJSON
}
