package shared



type RuleTags struct {
    Name *string `json:"name,omitempty"`
    
}

type Rule struct {
    Directives []string `json:"directives,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    ID *string `json:"id,omitempty"`
    LongDescription *string `json:"longDescription,omitempty"`
    ShortDescription *string `json:"shortDescription,omitempty"`
    System *bool `json:"system,omitempty"`
    Tags []RuleTags `json:"tags,omitempty"`
    Targets []RuleTargets `json:"targets,omitempty"`
    
}

