package shared



type Response struct {
    Data map[string]interface{} `json:"data"`
    Success bool `json:"success"`
    
}

