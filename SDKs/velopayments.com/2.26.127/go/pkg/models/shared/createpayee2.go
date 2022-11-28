package shared

type CreatePayee2Input struct {
	Address        CreatePayeeAddress2    `json:"address"`
	Challenge      *Challenge2            `json:"challenge,omitempty"`
	Company        *Company2              `json:"company,omitempty"`
	Email          string                 `json:"email"`
	Individual     *CreateIndividual2     `json:"individual,omitempty"`
	Language       *string                `json:"language,omitempty"`
	PaymentChannel *CreatePaymentChannel2 `json:"paymentChannel,omitempty"`
	RemoteID       string                 `json:"remoteId"`
	Type           PayeeTypeEnum          `json:"type"`
}
