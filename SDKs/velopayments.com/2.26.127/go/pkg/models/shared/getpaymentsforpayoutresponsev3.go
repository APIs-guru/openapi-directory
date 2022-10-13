package shared

type GetPaymentsForPayoutResponseV3 struct {
	Content []PaymentResponseV3 `json:"content"`
	Links   []interface{}       `json:"links"`
	Page    *interface{}        `json:"page"`
	Summary *interface{}        `json:"summary"`
}
