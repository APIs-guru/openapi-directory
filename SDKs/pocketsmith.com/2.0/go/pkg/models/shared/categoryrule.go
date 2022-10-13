package shared

type CategoryRule struct {
	Category     *Category `json:"category"`
	CreatedAt    *string   `json:"created_at"`
	ID           *int64    `json:"id"`
	PayeeMatches *string   `json:"payee_matches"`
	UpdatedAt    *string   `json:"updated_at"`
}
