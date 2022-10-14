package shared

type RuleNewTags struct {
	Name *string `json:"name,omitempty"`
}

type RuleNew struct {
	Category         *string       `json:"category,omitempty"`
	Directives       []string      `json:"directives,omitempty"`
	DisplayName      *string       `json:"displayName,omitempty"`
	Enabled          *bool         `json:"enabled,omitempty"`
	ID               *string       `json:"id,omitempty"`
	LongDescription  *string       `json:"longDescription,omitempty"`
	ShortDescription *string       `json:"shortDescription,omitempty"`
	Source           *string       `json:"source,omitempty"`
	System           *bool         `json:"system,omitempty"`
	Tags             []RuleNewTags `json:"tags,omitempty"`
	Targets          []string      `json:"targets,omitempty"`
}
