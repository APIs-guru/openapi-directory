package shared

type Institution struct {
	CreatedAt    *string `json:"created_at"`
	CurrencyCode *string `json:"currency_code"`
	ID           *int64  `json:"id"`
	Title        *string `json:"title"`
	UpdatedAt    *string `json:"updated_at"`
}
