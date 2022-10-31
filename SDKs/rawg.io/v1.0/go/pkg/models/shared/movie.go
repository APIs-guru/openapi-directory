package shared



type Movie struct {
    Data map[string]interface{} `json:"data,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Preview *string `json:"preview,omitempty"`
    
}

