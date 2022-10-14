package shared

type GetPaymentsForPayoutResponseV3 struct {
	Content []PaymentResponseV3 `json:"content,omitempty"`
	Links   []interface{}       `json:"links,omitempty"`
	Page    *interface{}        `json:"page,omitempty"`
	Summary *interface{}        `json:"summary,omitempty"`
}
