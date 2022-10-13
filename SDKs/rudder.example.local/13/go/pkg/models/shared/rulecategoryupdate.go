package shared

type RuleCategoryUpdate struct {
	Description *string `json:"description"`
	Name        string  `json:"name"`
	Parent      string  `json:"parent"`
}
