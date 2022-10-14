package shared

type InvoiceAcceptedPaymentMethods struct {
	BankAccount    *bool `json:"bank_account,omitempty"`
	Card           *bool `json:"card,omitempty"`
	SquareGiftCard *bool `json:"square_gift_card,omitempty"`
}
