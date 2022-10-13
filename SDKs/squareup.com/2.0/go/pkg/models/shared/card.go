package shared

type Card struct {
	BillingAddress *Address `json:"billing_address"`
	Bin            *string  `json:"bin"`
	CardBrand      *string  `json:"card_brand"`
	CardType       *string  `json:"card_type"`
	CardholderName *string  `json:"cardholder_name"`
	CustomerID     *string  `json:"customer_id"`
	Enabled        *bool    `json:"enabled"`
	ExpMonth       *int64   `json:"exp_month"`
	ExpYear        *int64   `json:"exp_year"`
	Fingerprint    *string  `json:"fingerprint"`
	ID             *string  `json:"id"`
	Last4          *string  `json:"last_4"`
	PrepaidType    *string  `json:"prepaid_type"`
	ReferenceID    *string  `json:"reference_id"`
	Version        *int64   `json:"version"`
}
