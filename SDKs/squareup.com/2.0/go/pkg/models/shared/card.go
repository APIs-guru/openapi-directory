package shared

type Card struct {
	BillingAddress *Address `json:"billing_address,omitempty"`
	Bin            *string  `json:"bin,omitempty"`
	CardBrand      *string  `json:"card_brand,omitempty"`
	CardType       *string  `json:"card_type,omitempty"`
	CardholderName *string  `json:"cardholder_name,omitempty"`
	CustomerID     *string  `json:"customer_id,omitempty"`
	Enabled        *bool    `json:"enabled,omitempty"`
	ExpMonth       *int64   `json:"exp_month,omitempty"`
	ExpYear        *int64   `json:"exp_year,omitempty"`
	Fingerprint    *string  `json:"fingerprint,omitempty"`
	ID             *string  `json:"id,omitempty"`
	Last4          *string  `json:"last_4,omitempty"`
	PrepaidType    *string  `json:"prepaid_type,omitempty"`
	ReferenceID    *string  `json:"reference_id,omitempty"`
	Version        *int64   `json:"version,omitempty"`
}
