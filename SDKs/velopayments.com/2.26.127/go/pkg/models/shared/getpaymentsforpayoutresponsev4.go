package shared

type GetPaymentsForPayoutResponseV4 struct {
	Content []PaymentResponseV4 `json:"content"`
	Links   []interface{}       `json:"links"`
	Page    *interface{}        `json:"page"`
	Summary *interface{}        `json:"summary"`
}
