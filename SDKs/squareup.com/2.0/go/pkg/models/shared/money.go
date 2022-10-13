package shared

type Money struct {
	Amount   *int64  `json:"amount"`
	Currency *string `json:"currency"`
}
