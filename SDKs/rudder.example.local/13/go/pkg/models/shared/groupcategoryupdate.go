package shared

type GroupCategoryUpdate struct {
	Description *string `json:"description"`
	Name        string  `json:"name"`
	Parent      string  `json:"parent"`
}
