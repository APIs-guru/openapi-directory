package shared

type PagedPaymentsResponseV3 struct {
	Content []PaymentV3   `json:"content"`
	Links   []interface{} `json:"links"`
	Page    *interface{}  `json:"page"`
}
