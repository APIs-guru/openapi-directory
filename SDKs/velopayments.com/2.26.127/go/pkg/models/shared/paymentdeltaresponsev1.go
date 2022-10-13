package shared

type PaymentDeltaResponseV1 struct {
	Content []PaymentDeltaV1 `json:"content"`
	Links   []interface{}    `json:"links"`
	Page    *interface{}     `json:"page"`
}
