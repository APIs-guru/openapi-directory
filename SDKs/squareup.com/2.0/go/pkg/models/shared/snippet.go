package shared

type Snippet struct {
	Content   string  `json:"content"`
	CreatedAt *string `json:"created_at"`
	ID        *string `json:"id"`
	SiteID    *string `json:"site_id"`
	UpdatedAt *string `json:"updated_at"`
}
