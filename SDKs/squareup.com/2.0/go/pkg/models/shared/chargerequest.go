package shared

type ChargeRequest struct {
	AdditionalRecipients []AdditionalRecipient `json:"additional_recipients"`
	AmountMoney          Money                 `json:"amount_money"`
	BillingAddress       *Address              `json:"billing_address"`
	BuyerEmailAddress    *string               `json:"buyer_email_address"`
	CardNonce            *string               `json:"card_nonce"`
	CustomerCardID       *string               `json:"customer_card_id"`
	CustomerID           *string               `json:"customer_id"`
	DelayCapture         *bool                 `json:"delay_capture"`
	IdempotencyKey       string                `json:"idempotency_key"`
	Note                 *string               `json:"note"`
	OrderID              *string               `json:"order_id"`
	ReferenceID          *string               `json:"reference_id"`
	ShippingAddress      *Address              `json:"shipping_address"`
	VerificationToken    *string               `json:"verification_token"`
}
