package shared

type CreatePayeeInput struct {
	Address        CreatePayeeAddress    `json:"address"`
	Challenge      *Challenge            `json:"challenge,omitempty"`
	Company        *Company              `json:"company,omitempty"`
	Email          string                `json:"email"`
	Individual     *CreateIndividual     `json:"individual,omitempty"`
	Language       *string               `json:"language,omitempty"`
	PaymentChannel *CreatePaymentChannel `json:"paymentChannel,omitempty"`
	RemoteID       string                `json:"remoteId"`
	Type           PayeeTypeEnum         `json:"type"`
}
