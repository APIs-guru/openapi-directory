package shared



type RetrieveTransactionResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Transaction *Transaction `json:"transaction,omitempty"`
    
}

