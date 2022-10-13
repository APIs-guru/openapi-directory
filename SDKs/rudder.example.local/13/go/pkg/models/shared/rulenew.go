package shared

type RuleNewTags struct {
	Name *string `json:"name"`
}

type RuleNew struct {
	Category         *string       `json:"category"`
	Directives       []string      `json:"directives"`
	DisplayName      *string       `json:"displayName"`
	Enabled          *bool         `json:"enabled"`
	ID               *string       `json:"id"`
	LongDescription  *string       `json:"longDescription"`
	ShortDescription *string       `json:"shortDescription"`
	Source           *string       `json:"source"`
	System           *bool         `json:"system"`
	Tags             []RuleNewTags `json:"tags"`
	Targets          []string      `json:"targets"`
}
