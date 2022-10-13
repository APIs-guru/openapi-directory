package shared

type InvoiceAcceptedPaymentMethods struct {
	BankAccount    *bool `json:"bank_account"`
	Card           *bool `json:"card"`
	SquareGiftCard *bool `json:"square_gift_card"`
}
