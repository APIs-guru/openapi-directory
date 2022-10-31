package shared

type ListPaymentsResponseV3 struct {
	Content []PaymentResponseV3 `json:"content,omitempty"`
	Links   []interface{}       `json:"links,omitempty"`
	Page    *interface{}        `json:"page,omitempty"`
}
