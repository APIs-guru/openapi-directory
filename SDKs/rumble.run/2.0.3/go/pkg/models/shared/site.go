package shared

type Site struct {
	CreatedAt   *int64  `json:"created_at"`
	Description *string `json:"description"`
	Excludes    *string `json:"excludes"`
	ID          string  `json:"id"`
	Name        string  `json:"name"`
	Permanent   *bool   `json:"permanent"`
	Scope       *string `json:"scope"`
	UpdatedAt   *int64  `json:"updated_at"`
}
