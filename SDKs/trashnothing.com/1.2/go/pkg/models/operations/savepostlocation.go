package operations

type SavePostLocationRequestBody struct {
	Latitude  float64 `multipartForm:"name=latitude"`
	Longitude float64 `multipartForm:"name=longitude"`
	Name      string  `multipartForm:"name=name"`
}

type SavePostLocationRequest struct {
	Request SavePostLocationRequestBody `request:"mediaType=multipart/form-data"`
}

type SavePostLocation200ApplicationJSON struct {
	Latitude  *float64 `json:"latitude"`
	Longitude *float64 `json:"longitude"`
	Name      *string  `json:"name"`
}

type SavePostLocationResponse struct {
	ContentType                               string
	StatusCode                                int64
	SavePostLocation200ApplicationJSONObjects []SavePostLocation200ApplicationJSON
}
