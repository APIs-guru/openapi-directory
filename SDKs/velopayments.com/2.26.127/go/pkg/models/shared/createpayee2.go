package shared

type CreatePayee2 struct {
	Address        CreatePayeeAddress2    `json:"address"`
	Challenge      *Challenge2            `json:"challenge"`
	Company        *Company2              `json:"company"`
	Email          string                 `json:"email"`
	Individual     *CreateIndividual2     `json:"individual"`
	Language       *string                `json:"language"`
	PayeeID        *string                `json:"payeeId"`
	PaymentChannel *CreatePaymentChannel2 `json:"paymentChannel"`
	PayorRefs      []PayeePayorRef        `json:"payorRefs"`
	RemoteID       string                 `json:"remoteId"`
	Type           PayeeTypeEnum          `json:"type"`
}
