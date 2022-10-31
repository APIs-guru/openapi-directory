package shared



type RejectedPaymentV3 struct {
    Amount int64 `json:"amount"`
    CurrencyType string `json:"currencyType"`
    LineNumber *int64 `json:"lineNumber,omitempty"`
    Message *string `json:"message,omitempty"`
    PaymentMetadata *string `json:"paymentMetadata,omitempty"`
    PayorPaymentID string `json:"payorPaymentId"`
    Reason string `json:"reason"`
    ReasonCode *string `json:"reasonCode,omitempty"`
    RemoteID string `json:"remoteId"`
    RemoteSystemID *string `json:"remoteSystemId,omitempty"`
    SourceAccountName string `json:"sourceAccountName"`
    
}

