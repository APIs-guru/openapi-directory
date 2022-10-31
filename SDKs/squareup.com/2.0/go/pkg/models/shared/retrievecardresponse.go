package shared



type RetrieveCardResponse struct {
    Card *Card `json:"card,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

