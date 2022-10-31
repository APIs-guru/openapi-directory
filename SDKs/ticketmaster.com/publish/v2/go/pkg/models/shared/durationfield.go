package shared



type DurationField struct {
    Name *string `json:"name,omitempty"`
    Precise *bool `json:"precise,omitempty"`
    Supported *bool `json:"supported,omitempty"`
    Type *DurationFieldType `json:"type,omitempty"`
    UnitMillis *int64 `json:"unitMillis,omitempty"`
    
}

