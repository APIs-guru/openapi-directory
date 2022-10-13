package shared

type Site struct {
	CreatedAt   *string `json:"created_at"`
	Domain      *string `json:"domain"`
	ID          *string `json:"id"`
	IsPublished *bool   `json:"is_published"`
	SiteTitle   *string `json:"site_title"`
	UpdatedAt   *string `json:"updated_at"`
}
