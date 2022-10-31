package shared



type APIVersionAll struct {
    Status interface{} `json:"status"`
    Version int64 `json:"version"`
    
}

type APIVersion struct {
    All []APIVersionAll `json:"all,omitempty"`
    Latest *int64 `json:"latest,omitempty"`
    
}

