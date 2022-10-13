package shared

type CreatePayee struct {
	Address        CreatePayeeAddress    `json:"address"`
	Challenge      *Challenge            `json:"challenge"`
	Company        *Company              `json:"company"`
	Email          string                `json:"email"`
	Individual     *CreateIndividual     `json:"individual"`
	Language       *string               `json:"language"`
	PayeeID        *string               `json:"payeeId"`
	PaymentChannel *CreatePaymentChannel `json:"paymentChannel"`
	PayorRefs      []PayeePayorRefV3     `json:"payorRefs"`
	RemoteID       string                `json:"remoteId"`
	Type           PayeeTypeEnum         `json:"type"`
}
