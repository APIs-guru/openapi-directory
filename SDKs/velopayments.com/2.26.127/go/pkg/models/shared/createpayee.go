package shared

type CreatePayee struct {
	Address        CreatePayeeAddress    `json:"address"`
	Challenge      *Challenge            `json:"challenge,omitempty"`
	Company        *Company              `json:"company,omitempty"`
	Email          string                `json:"email"`
	Individual     *CreateIndividual     `json:"individual,omitempty"`
	Language       *string               `json:"language,omitempty"`
	PayeeID        *string               `json:"payeeId,omitempty"`
	PaymentChannel *CreatePaymentChannel `json:"paymentChannel,omitempty"`
	PayorRefs      []PayeePayorRefV3     `json:"payorRefs,omitempty"`
	RemoteID       string                `json:"remoteId"`
	Type           PayeeTypeEnum         `json:"type"`
}
