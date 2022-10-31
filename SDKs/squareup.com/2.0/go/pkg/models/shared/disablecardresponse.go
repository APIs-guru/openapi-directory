package shared



type DisableCardResponse struct {
    Card *Card `json:"card,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

