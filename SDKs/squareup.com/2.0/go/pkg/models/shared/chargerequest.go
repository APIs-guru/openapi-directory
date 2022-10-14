package shared

type ChargeRequest struct {
	AdditionalRecipients []AdditionalRecipient `json:"additional_recipients,omitempty"`
	AmountMoney          Money                 `json:"amount_money"`
	BillingAddress       *Address              `json:"billing_address,omitempty"`
	BuyerEmailAddress    *string               `json:"buyer_email_address,omitempty"`
	CardNonce            *string               `json:"card_nonce,omitempty"`
	CustomerCardID       *string               `json:"customer_card_id,omitempty"`
	CustomerID           *string               `json:"customer_id,omitempty"`
	DelayCapture         *bool                 `json:"delay_capture,omitempty"`
	IdempotencyKey       string                `json:"idempotency_key"`
	Note                 *string               `json:"note,omitempty"`
	OrderID              *string               `json:"order_id,omitempty"`
	ReferenceID          *string               `json:"reference_id,omitempty"`
	ShippingAddress      *Address              `json:"shipping_address,omitempty"`
	VerificationToken    *string               `json:"verification_token,omitempty"`
}
