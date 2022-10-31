package shared

type DirectivePolicyModeEnum string

const (
	DirectivePolicyModeEnumEnforce DirectivePolicyModeEnum = "enforce"
	DirectivePolicyModeEnumAudit   DirectivePolicyModeEnum = "audit"
)

type DirectiveTags struct {
	Name *string `json:"name,omitempty"`
}

type Directive struct {
	DisplayName      *string                  `json:"displayName,omitempty"`
	Enabled          *bool                    `json:"enabled,omitempty"`
	ID               *string                  `json:"id,omitempty"`
	LongDescription  *string                  `json:"longDescription,omitempty"`
	Parameters       map[string]interface{}   `json:"parameters,omitempty"`
	PolicyMode       *DirectivePolicyModeEnum `json:"policyMode,omitempty"`
	Priority         *int64                   `json:"priority,omitempty"`
	ShortDescription *string                  `json:"shortDescription,omitempty"`
	System           *bool                    `json:"system,omitempty"`
	Tags             []DirectiveTags          `json:"tags,omitempty"`
	TechniqueName    *string                  `json:"techniqueName,omitempty"`
	TechniqueVersion *string                  `json:"techniqueVersion,omitempty"`
}
