package shared

type Category struct {
	Children   []Category `json:"children"`
	Colour     *string    `json:"colour"`
	CreatedAt  *string    `json:"created_at"`
	ID         *int64     `json:"id"`
	IsTransfer *bool      `json:"is_transfer"`
	ParentID   *int64     `json:"parent_id"`
	Title      *string    `json:"title"`
	UpdatedAt  *string    `json:"updated_at"`
}
