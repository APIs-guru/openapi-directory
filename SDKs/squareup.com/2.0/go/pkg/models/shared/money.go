package shared

type Money struct {
	Amount   *int64  `json:"amount,omitempty"`
	Currency *string `json:"currency,omitempty"`
}
