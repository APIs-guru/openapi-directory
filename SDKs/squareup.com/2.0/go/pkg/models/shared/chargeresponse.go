package shared



type ChargeResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Transaction *Transaction `json:"transaction,omitempty"`
    
}

