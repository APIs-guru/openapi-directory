package shared



type PaymentInstructionV3 struct {
    Amount int64 `json:"amount"`
    Currency string `json:"currency"`
    PaymentMemo *string `json:"paymentMemo,omitempty"`
    PaymentMetadata *string `json:"paymentMetadata,omitempty"`
    PayorPaymentID *string `json:"payorPaymentId,omitempty"`
    RemoteID string `json:"remoteId"`
    RemoteSystemID *string `json:"remoteSystemId,omitempty"`
    SourceAccountName string `json:"sourceAccountName"`
    TransmissionType *TransmissionTypeEnum `json:"transmissionType,omitempty"`
    
}

