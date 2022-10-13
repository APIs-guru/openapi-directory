package shared

type DirectiveNewTags struct {
	Name *string `json:"name"`
}

type DirectiveNew struct {
	DisplayName      *string                `json:"displayName"`
	Enabled          *bool                  `json:"enabled"`
	ID               *string                `json:"id"`
	LongDescription  *string                `json:"longDescription"`
	Parameters       map[string]interface{} `json:"parameters"`
	Priority         *int64                 `json:"priority"`
	ShortDescription *string                `json:"shortDescription"`
	Source           *string                `json:"source"`
	System           *bool                  `json:"system"`
	Tags             []DirectiveNewTags     `json:"tags"`
	TechniqueName    *string                `json:"techniqueName"`
	TechniqueVersion *string                `json:"techniqueVersion"`
}
