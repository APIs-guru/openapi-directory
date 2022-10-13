package shared

type AllowanceCharge struct {
	AmountExcludingVat float64 `json:"amountExcludingVat"`
	Reason             *string `json:"reason"`
	ReasonCode         *string `json:"reasonCode"`
	Tax                Tax     `json:"tax"`
	TaxesDutiesFees    []Tax   `json:"taxes_duties_fees"`
}
