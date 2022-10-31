package shared

type Institution struct {
	CreatedAt    *string `json:"created_at,omitempty"`
	CurrencyCode *string `json:"currency_code,omitempty"`
	ID           *int64  `json:"id,omitempty"`
	Title        *string `json:"title,omitempty"`
	UpdatedAt    *string `json:"updated_at,omitempty"`
}
