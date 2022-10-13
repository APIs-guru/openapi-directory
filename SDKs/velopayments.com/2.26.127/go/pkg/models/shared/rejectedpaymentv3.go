package shared

type RejectedPaymentV3 struct {
	Amount            int64   `json:"amount"`
	CurrencyType      string  `json:"currencyType"`
	LineNumber        *int64  `json:"lineNumber"`
	Message           *string `json:"message"`
	PaymentMetadata   *string `json:"paymentMetadata"`
	PayorPaymentID    string  `json:"payorPaymentId"`
	Reason            string  `json:"reason"`
	ReasonCode        *string `json:"reasonCode"`
	RemoteID          string  `json:"remoteId"`
	RemoteSystemID    *string `json:"remoteSystemId"`
	SourceAccountName string  `json:"sourceAccountName"`
}
