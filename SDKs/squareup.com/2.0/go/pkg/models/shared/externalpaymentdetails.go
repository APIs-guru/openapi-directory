package shared

type ExternalPaymentDetails struct {
	Source         string  `json:"source"`
	SourceFeeMoney *Money  `json:"source_fee_money,omitempty"`
	SourceID       *string `json:"source_id,omitempty"`
	Type           string  `json:"type"`
}
