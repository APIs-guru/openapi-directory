package shared



type OptionalDateTimeContract struct {
    Day *int32 `json:"day,omitempty"`
    Formatted *string `json:"formatted,omitempty"`
    IsEmpty *bool `json:"isEmpty,omitempty"`
    Month *int32 `json:"month,omitempty"`
    Year *int32 `json:"year,omitempty"`
    
}

