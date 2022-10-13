package shared

type PaymentDeltaResponse struct {
	Content []PaymentDelta `json:"content"`
	Links   []interface{}  `json:"links"`
	Page    *interface{}   `json:"page"`
}
