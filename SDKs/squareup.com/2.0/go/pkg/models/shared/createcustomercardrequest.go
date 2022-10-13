package shared

type CreateCustomerCardRequest struct {
	BillingAddress    *Address `json:"billing_address"`
	CardNonce         string   `json:"card_nonce"`
	CardholderName    *string  `json:"cardholder_name"`
	VerificationToken *string  `json:"verification_token"`
}
