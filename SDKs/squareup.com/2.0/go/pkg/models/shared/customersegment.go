package shared

type CustomerSegment struct {
	CreatedAt *string `json:"created_at,omitempty"`
	ID        *string `json:"id,omitempty"`
	Name      string  `json:"name"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}
