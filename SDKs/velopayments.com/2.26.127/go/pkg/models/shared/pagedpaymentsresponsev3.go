package shared

// PagedPaymentsResponseV3
// List Payees Response Object
type PagedPaymentsResponseV3 struct {
	Content []PaymentV3   `json:"content,omitempty"`
	Links   []interface{} `json:"links,omitempty"`
	Page    *interface{}  `json:"page,omitempty"`
}
