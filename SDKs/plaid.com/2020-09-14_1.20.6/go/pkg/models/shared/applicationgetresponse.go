package shared



type ApplicationGetResponse struct {
    Application Application `json:"application"`
    RequestID string `json:"request_id"`
    
}

