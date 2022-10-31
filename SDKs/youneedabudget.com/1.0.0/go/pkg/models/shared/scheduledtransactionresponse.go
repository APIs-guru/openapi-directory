package shared



type ScheduledTransactionResponseData struct {
    ScheduledTransaction ScheduledTransactionDetail `json:"scheduled_transaction"`
    
}

type ScheduledTransactionResponse struct {
    Data ScheduledTransactionResponseData `json:"data"`
    
}

