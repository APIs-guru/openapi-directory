package shared



type DirectiveNewTags struct {
    Name *string `json:"name,omitempty"`
    
}

type DirectiveNew struct {
    DisplayName *string `json:"displayName,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    ID *string `json:"id,omitempty"`
    LongDescription *string `json:"longDescription,omitempty"`
    Parameters map[string]interface{} `json:"parameters,omitempty"`
    Priority *int64 `json:"priority,omitempty"`
    ShortDescription *string `json:"shortDescription,omitempty"`
    Source *string `json:"source,omitempty"`
    System *bool `json:"system,omitempty"`
    Tags []DirectiveNewTags `json:"tags,omitempty"`
    TechniqueName *string `json:"techniqueName,omitempty"`
    TechniqueVersion *string `json:"techniqueVersion,omitempty"`
    
}

