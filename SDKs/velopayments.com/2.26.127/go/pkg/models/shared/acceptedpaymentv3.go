package shared

type AcceptedPaymentV3 struct {
	Amount            int64   `json:"amount"`
	CurrencyType      string  `json:"currencyType"`
	PaymentMemo       *string `json:"paymentMemo"`
	PaymentMetadata   *string `json:"paymentMetadata"`
	PayorPaymentID    string  `json:"payorPaymentId"`
	RemoteID          string  `json:"remoteId"`
	RemoteSystemID    *string `json:"remoteSystemId"`
	SourceAccountName string  `json:"sourceAccountName"`
}
