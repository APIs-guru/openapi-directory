package shared

type PaymentV3StatusEnum string

const (
	PaymentV3StatusEnumSubmitted     PaymentV3StatusEnum = "SUBMITTED"
	PaymentV3StatusEnumAccepted      PaymentV3StatusEnum = "ACCEPTED"
	PaymentV3StatusEnumRejected      PaymentV3StatusEnum = "REJECTED"
	PaymentV3StatusEnumWithdrawn     PaymentV3StatusEnum = "WITHDRAWN"
	PaymentV3StatusEnumReturned      PaymentV3StatusEnum = "RETURNED"
	PaymentV3StatusEnumAwaitingFunds PaymentV3StatusEnum = "AWAITING_FUNDS"
	PaymentV3StatusEnumFunded        PaymentV3StatusEnum = "FUNDED"
	PaymentV3StatusEnumUnfunded      PaymentV3StatusEnum = "UNFUNDED"
	PaymentV3StatusEnumCancelled     PaymentV3StatusEnum = "CANCELLED"
	PaymentV3StatusEnumRequested     PaymentV3StatusEnum = "REQUESTED"
)

type PaymentV3 struct {
	Amount            *int64                `json:"amount"`
	Currency          *string               `json:"currency"`
	Payee             *PayoutPayeeV3        `json:"payee"`
	PaymentID         string                `json:"paymentId"`
	PaymentMemo       *string               `json:"paymentMemo"`
	PaymentMetadata   *string               `json:"paymentMetadata"`
	PayorPaymentID    *string               `json:"payorPaymentId"`
	RemoteID          *string               `json:"remoteId"`
	RemoteSystemID    *string               `json:"remoteSystemId"`
	SourceAccountName *string               `json:"sourceAccountName"`
	Status            *PaymentV3StatusEnum  `json:"status"`
	TransmissionType  *TransmissionTypeEnum `json:"transmissionType"`
	Withdrawable      *bool                 `json:"withdrawable"`
}
