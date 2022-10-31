package shared



type Error struct {
    Code *string `json:"code,omitempty"`
    Field *string `json:"field,omitempty"`
    Message *string `json:"message,omitempty"`
    Solution *Solution `json:"solution,omitempty"`
    
}

