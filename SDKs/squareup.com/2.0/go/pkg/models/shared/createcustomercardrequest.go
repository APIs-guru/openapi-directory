package shared

type CreateCustomerCardRequest struct {
	BillingAddress    *Address `json:"billing_address,omitempty"`
	CardNonce         string   `json:"card_nonce"`
	CardholderName    *string  `json:"cardholder_name,omitempty"`
	VerificationToken *string  `json:"verification_token,omitempty"`
}
