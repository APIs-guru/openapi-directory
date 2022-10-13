package shared

type ExternalPaymentDetails struct {
	Source         string  `json:"source"`
	SourceFeeMoney *Money  `json:"source_fee_money"`
	SourceID       *string `json:"source_id"`
	Type           string  `json:"type"`
}
