package operations

type GetPostLocations200ApplicationJSON struct {
	Latitude  *float64 `json:"latitude"`
	Longitude *float64 `json:"longitude"`
	Name      *string  `json:"name"`
}

type GetPostLocationsResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetPostLocations200ApplicationJSONObjects []GetPostLocations200ApplicationJSON
}
