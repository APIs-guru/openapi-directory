package shared

type RuleTags struct {
	Name *string `json:"name"`
}

type Rule struct {
	Directives       []string      `json:"directives"`
	DisplayName      *string       `json:"displayName"`
	Enabled          *bool         `json:"enabled"`
	ID               *string       `json:"id"`
	LongDescription  *string       `json:"longDescription"`
	ShortDescription *string       `json:"shortDescription"`
	System           *bool         `json:"system"`
	Tags             []RuleTags    `json:"tags"`
	Targets          []RuleTargets `json:"targets"`
}
