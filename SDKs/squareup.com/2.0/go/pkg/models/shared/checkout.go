package shared

type Checkout struct {
	AdditionalRecipients       []AdditionalRecipient `json:"additional_recipients,omitempty"`
	AskForShippingAddress      *bool                 `json:"ask_for_shipping_address,omitempty"`
	CheckoutPageURL            *string               `json:"checkout_page_url,omitempty"`
	CreatedAt                  *string               `json:"created_at,omitempty"`
	ID                         *string               `json:"id,omitempty"`
	MerchantSupportEmail       *string               `json:"merchant_support_email,omitempty"`
	Order                      *Order                `json:"order,omitempty"`
	PrePopulateBuyerEmail      *string               `json:"pre_populate_buyer_email,omitempty"`
	PrePopulateShippingAddress *Address              `json:"pre_populate_shipping_address,omitempty"`
	RedirectURL                *string               `json:"redirect_url,omitempty"`
}
