package shared

type CategoryGroupWithCategories struct {
	Categories []Category `json:"categories"`
	Deleted    bool       `json:"deleted"`
	Hidden     bool       `json:"hidden"`
	ID         string     `json:"id"`
	Name       string     `json:"name"`
}
