package shared



type PaymentDeltaResponse struct {
    Content []PaymentDelta `json:"content,omitempty"`
    Links []interface{} `json:"links,omitempty"`
    Page *interface{} `json:"page,omitempty"`
    
}

