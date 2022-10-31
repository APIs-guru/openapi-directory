package shared



type Error struct {
    Code *int64 `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    Name *string `json:"name,omitempty"`
    Status *int64 `json:"status,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

