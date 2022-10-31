package shared

type FailedPayee2 struct {
	Address        *CreatePayeeAddress2   `json:"address,omitempty"`
	Challenge      *Challenge2            `json:"challenge,omitempty"`
	Company        *Company2              `json:"company,omitempty"`
	Email          *string                `json:"email,omitempty"`
	Individual     *CreateIndividual2     `json:"individual,omitempty"`
	Language       *string                `json:"language,omitempty"`
	PayeeID        *string                `json:"payeeId,omitempty"`
	PaymentChannel *CreatePaymentChannel2 `json:"paymentChannel,omitempty"`
	PayorRefs      []PayeePayorRef        `json:"payorRefs,omitempty"`
	RemoteID       *string                `json:"remoteId,omitempty"`
	Type           *PayeeTypeEnum         `json:"type,omitempty"`
}
