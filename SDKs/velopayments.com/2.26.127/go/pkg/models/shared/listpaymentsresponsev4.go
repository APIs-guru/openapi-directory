package shared

// ListPaymentsResponseV4
// List Payments Response Object
type ListPaymentsResponseV4 struct {
	Content []PaymentResponseV4 `json:"content,omitempty"`
	Links   []interface{}       `json:"links,omitempty"`
	Page    *interface{}        `json:"page,omitempty"`
}
