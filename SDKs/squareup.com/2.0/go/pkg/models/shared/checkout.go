package shared

type Checkout struct {
	AdditionalRecipients       []AdditionalRecipient `json:"additional_recipients"`
	AskForShippingAddress      *bool                 `json:"ask_for_shipping_address"`
	CheckoutPageURL            *string               `json:"checkout_page_url"`
	CreatedAt                  *string               `json:"created_at"`
	ID                         *string               `json:"id"`
	MerchantSupportEmail       *string               `json:"merchant_support_email"`
	Order                      *Order                `json:"order"`
	PrePopulateBuyerEmail      *string               `json:"pre_populate_buyer_email"`
	PrePopulateShippingAddress *Address              `json:"pre_populate_shipping_address"`
	RedirectURL                *string               `json:"redirect_url"`
}
