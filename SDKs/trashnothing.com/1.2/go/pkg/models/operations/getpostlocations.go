package operations



type GetPostLocations200ApplicationJSON struct {
    Latitude *float64 `json:"latitude,omitempty"`
    Longitude *float64 `json:"longitude,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type GetPostLocationsResponse struct {
    ContentType string 
    StatusCode int64 
    GetPostLocations200ApplicationJSONObjects []GetPostLocations200ApplicationJSON 
    
}

