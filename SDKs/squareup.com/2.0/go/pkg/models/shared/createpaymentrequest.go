package shared

type CreatePaymentRequest struct {
	AcceptPartialAuthorization     *bool                   `json:"accept_partial_authorization"`
	AmountMoney                    Money                   `json:"amount_money"`
	AppFeeMoney                    *Money                  `json:"app_fee_money"`
	Autocomplete                   *bool                   `json:"autocomplete"`
	BillingAddress                 *Address                `json:"billing_address"`
	BuyerEmailAddress              *string                 `json:"buyer_email_address"`
	CashDetails                    *CashPaymentDetails     `json:"cash_details"`
	CustomerID                     *string                 `json:"customer_id"`
	DelayDuration                  *string                 `json:"delay_duration"`
	ExternalDetails                *ExternalPaymentDetails `json:"external_details"`
	IdempotencyKey                 string                  `json:"idempotency_key"`
	LocationID                     *string                 `json:"location_id"`
	Note                           *string                 `json:"note"`
	OrderID                        *string                 `json:"order_id"`
	ReferenceID                    *string                 `json:"reference_id"`
	ShippingAddress                *Address                `json:"shipping_address"`
	SourceID                       string                  `json:"source_id"`
	StatementDescriptionIdentifier *string                 `json:"statement_description_identifier"`
	TipMoney                       *Money                  `json:"tip_money"`
	VerificationToken              *string                 `json:"verification_token"`
}
