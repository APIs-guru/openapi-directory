package shared

type DirectivePolicyModeEnum string

const (
	DirectivePolicyModeEnumEnforce DirectivePolicyModeEnum = "enforce"
	DirectivePolicyModeEnumAudit   DirectivePolicyModeEnum = "audit"
)

type DirectiveTags struct {
	Name *string `json:"name"`
}

type Directive struct {
	DisplayName      *string                  `json:"displayName"`
	Enabled          *bool                    `json:"enabled"`
	ID               *string                  `json:"id"`
	LongDescription  *string                  `json:"longDescription"`
	Parameters       map[string]interface{}   `json:"parameters"`
	PolicyMode       *DirectivePolicyModeEnum `json:"policyMode"`
	Priority         *int64                   `json:"priority"`
	ShortDescription *string                  `json:"shortDescription"`
	System           *bool                    `json:"system"`
	Tags             []DirectiveTags          `json:"tags"`
	TechniqueName    *string                  `json:"techniqueName"`
	TechniqueVersion *string                  `json:"techniqueVersion"`
}
