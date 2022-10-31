package shared



type MessageResponse struct {
    Data *Message `json:"data,omitempty"`
    Success *bool `json:"success,omitempty"`
    
}

