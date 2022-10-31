package shared



type ListTransactionsResponseLinks struct {
    Next string `json:"next"`
    Prev string `json:"prev"`
    
}

type ListTransactionsResponse struct {
    Data []TransactionResource `json:"data"`
    Links ListTransactionsResponseLinks `json:"links"`
    
}

