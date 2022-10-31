package shared



type Site struct {
    CreatedAt *int64 `json:"created_at,omitempty"`
    Description *string `json:"description,omitempty"`
    Excludes *string `json:"excludes,omitempty"`
    ID string `json:"id"`
    Name string `json:"name"`
    Permanent *bool `json:"permanent,omitempty"`
    Scope *string `json:"scope,omitempty"`
    UpdatedAt *int64 `json:"updated_at,omitempty"`
    
}

