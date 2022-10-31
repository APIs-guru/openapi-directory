package shared



type Feedback struct {
    Request *SeldonMessage `json:"request,omitempty"`
    Response *SeldonMessage `json:"response,omitempty"`
    Reward *float32 `json:"reward,omitempty"`
    Truth *SeldonMessage `json:"truth,omitempty"`
    
}

