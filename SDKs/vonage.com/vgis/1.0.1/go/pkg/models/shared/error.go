package shared



type Error struct {
    Field *string `json:"field,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

