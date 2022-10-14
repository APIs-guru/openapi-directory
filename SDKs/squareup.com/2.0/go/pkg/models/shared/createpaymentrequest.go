package shared

type CreatePaymentRequest struct {
	AcceptPartialAuthorization     *bool                   `json:"accept_partial_authorization,omitempty"`
	AmountMoney                    Money                   `json:"amount_money"`
	AppFeeMoney                    *Money                  `json:"app_fee_money,omitempty"`
	Autocomplete                   *bool                   `json:"autocomplete,omitempty"`
	BillingAddress                 *Address                `json:"billing_address,omitempty"`
	BuyerEmailAddress              *string                 `json:"buyer_email_address,omitempty"`
	CashDetails                    *CashPaymentDetails     `json:"cash_details,omitempty"`
	CustomerID                     *string                 `json:"customer_id,omitempty"`
	DelayDuration                  *string                 `json:"delay_duration,omitempty"`
	ExternalDetails                *ExternalPaymentDetails `json:"external_details,omitempty"`
	IdempotencyKey                 string                  `json:"idempotency_key"`
	LocationID                     *string                 `json:"location_id,omitempty"`
	Note                           *string                 `json:"note,omitempty"`
	OrderID                        *string                 `json:"order_id,omitempty"`
	ReferenceID                    *string                 `json:"reference_id,omitempty"`
	ShippingAddress                *Address                `json:"shipping_address,omitempty"`
	SourceID                       string                  `json:"source_id"`
	StatementDescriptionIdentifier *string                 `json:"statement_description_identifier,omitempty"`
	TipMoney                       *Money                  `json:"tip_money,omitempty"`
	VerificationToken              *string                 `json:"verification_token,omitempty"`
}
