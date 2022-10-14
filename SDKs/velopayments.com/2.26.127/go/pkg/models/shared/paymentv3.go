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
	Amount            *int64                `json:"amount,omitempty"`
	Currency          *string               `json:"currency,omitempty"`
	Payee             *PayoutPayeeV3        `json:"payee,omitempty"`
	PaymentID         string                `json:"paymentId"`
	PaymentMemo       *string               `json:"paymentMemo,omitempty"`
	PaymentMetadata   *string               `json:"paymentMetadata,omitempty"`
	PayorPaymentID    *string               `json:"payorPaymentId,omitempty"`
	RemoteID          *string               `json:"remoteId,omitempty"`
	RemoteSystemID    *string               `json:"remoteSystemId,omitempty"`
	SourceAccountName *string               `json:"sourceAccountName,omitempty"`
	Status            *PaymentV3StatusEnum  `json:"status,omitempty"`
	TransmissionType  *TransmissionTypeEnum `json:"transmissionType,omitempty"`
	Withdrawable      *bool                 `json:"withdrawable,omitempty"`
}
