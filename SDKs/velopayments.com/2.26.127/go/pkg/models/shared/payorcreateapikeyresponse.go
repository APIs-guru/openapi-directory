package shared



type PayorCreateAPIKeyResponse struct {
    APIKey *string `json:"apiKey,omitempty"`
    APISecret *string `json:"apiSecret,omitempty"`
    
}

