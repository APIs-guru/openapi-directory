package shared

type RuleCategoryUpdate struct {
	Description *string `json:"description,omitempty"`
	Name        string  `json:"name"`
	Parent      string  `json:"parent"`
}
