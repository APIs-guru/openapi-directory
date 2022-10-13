package shared

type ListPaymentsResponseV4 struct {
	Content []PaymentResponseV4 `json:"content"`
	Links   []interface{}       `json:"links"`
	Page    *interface{}        `json:"page"`
}
