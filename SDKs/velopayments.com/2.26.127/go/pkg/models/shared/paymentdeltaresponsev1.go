package shared

// PaymentDeltaResponseV1
// List Payment Changes Response Object
type PaymentDeltaResponseV1 struct {
	Content []PaymentDeltaV1 `json:"content,omitempty"`
	Links   []interface{}    `json:"links,omitempty"`
	Page    *interface{}     `json:"page,omitempty"`
}
