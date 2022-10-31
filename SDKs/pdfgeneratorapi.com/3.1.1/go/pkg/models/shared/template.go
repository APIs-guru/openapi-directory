package shared



type Template struct {
    ID *int64 `json:"id,omitempty"`
    Modified *string `json:"modified,omitempty"`
    Name *string `json:"name,omitempty"`
    Owner *bool `json:"owner,omitempty"`
    Tags []string `json:"tags,omitempty"`
    
}

