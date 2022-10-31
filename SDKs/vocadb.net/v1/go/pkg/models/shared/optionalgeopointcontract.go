package shared



type OptionalGeoPointContract struct {
    Formatted *string `json:"formatted,omitempty"`
    HasValue *bool `json:"hasValue,omitempty"`
    Latitude *float64 `json:"latitude,omitempty"`
    Longitude *float64 `json:"longitude,omitempty"`
    
}

