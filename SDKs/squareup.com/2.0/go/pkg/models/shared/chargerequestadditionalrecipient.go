package shared



type ChargeRequestAdditionalRecipient struct {
    AmountMoney Money `json:"amount_money"`
    Description string `json:"description"`
    LocationID string `json:"location_id"`
    
}

