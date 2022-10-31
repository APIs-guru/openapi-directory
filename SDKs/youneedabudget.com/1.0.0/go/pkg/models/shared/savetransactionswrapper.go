package shared



type SaveTransactionsWrapper struct {
    Transaction *SaveTransaction `json:"transaction,omitempty"`
    Transactions []SaveTransaction `json:"transactions,omitempty"`
    
}

