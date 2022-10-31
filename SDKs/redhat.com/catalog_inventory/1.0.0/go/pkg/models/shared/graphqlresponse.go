package shared



type GraphQlResponse struct {
    Data map[string]interface{} `json:"data,omitempty"`
    Errors []map[string]interface{} `json:"errors,omitempty"`
    
}

