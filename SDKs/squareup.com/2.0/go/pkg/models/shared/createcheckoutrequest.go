package shared

type CreateCheckoutRequest struct {
	AdditionalRecipients       []ChargeRequestAdditionalRecipient `json:"additional_recipients"`
	AskForShippingAddress      *bool                              `json:"ask_for_shipping_address"`
	IdempotencyKey             string                             `json:"idempotency_key"`
	MerchantSupportEmail       *string                            `json:"merchant_support_email"`
	Note                       *string                            `json:"note"`
	Order                      CreateOrderRequest                 `json:"order"`
	PrePopulateBuyerEmail      *string                            `json:"pre_populate_buyer_email"`
	PrePopulateShippingAddress *Address                           `json:"pre_populate_shipping_address"`
	RedirectURL                *string                            `json:"redirect_url"`
}
