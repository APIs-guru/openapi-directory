package shared



type APIVersions struct {
    All []APIVersion `json:"all,omitempty"`
    Latest *int64 `json:"latest,omitempty"`
    
}

