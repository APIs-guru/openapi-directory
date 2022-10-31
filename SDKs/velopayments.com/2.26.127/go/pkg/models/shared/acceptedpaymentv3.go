package shared



type AcceptedPaymentV3 struct {
    Amount int64 `json:"amount"`
    CurrencyType string `json:"currencyType"`
    PaymentMemo *string `json:"paymentMemo,omitempty"`
    PaymentMetadata *string `json:"paymentMetadata,omitempty"`
    PayorPaymentID string `json:"payorPaymentId"`
    RemoteID string `json:"remoteId"`
    RemoteSystemID *string `json:"remoteSystemId,omitempty"`
    SourceAccountName string `json:"sourceAccountName"`
    
}

