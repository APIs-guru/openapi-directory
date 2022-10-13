package shared

type CustomerSegment struct {
	CreatedAt *string `json:"created_at"`
	ID        *string `json:"id"`
	Name      string  `json:"name"`
	UpdatedAt *string `json:"updated_at"`
}
