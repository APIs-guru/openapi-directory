package shared

type PaymentInstructionV3 struct {
	Amount            int64                 `json:"amount"`
	Currency          string                `json:"currency"`
	PaymentMemo       *string               `json:"paymentMemo"`
	PaymentMetadata   *string               `json:"paymentMetadata"`
	PayorPaymentID    *string               `json:"payorPaymentId"`
	RemoteID          string                `json:"remoteId"`
	RemoteSystemID    *string               `json:"remoteSystemId"`
	SourceAccountName string                `json:"sourceAccountName"`
	TransmissionType  *TransmissionTypeEnum `json:"transmissionType"`
}
