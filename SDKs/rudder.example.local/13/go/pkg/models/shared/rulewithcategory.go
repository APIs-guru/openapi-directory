package shared

type RuleWithCategoryTags struct {
	Name *string `json:"name"`
}

type RuleWithCategory struct {
	Category         *string                `json:"category"`
	Directives       []string               `json:"directives"`
	DisplayName      *string                `json:"displayName"`
	Enabled          *bool                  `json:"enabled"`
	ID               *string                `json:"id"`
	LongDescription  *string                `json:"longDescription"`
	ShortDescription *string                `json:"shortDescription"`
	System           *bool                  `json:"system"`
	Tags             []RuleWithCategoryTags `json:"tags"`
	Targets          []string               `json:"targets"`
}
