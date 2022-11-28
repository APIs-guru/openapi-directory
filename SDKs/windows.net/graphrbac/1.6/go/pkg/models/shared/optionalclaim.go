package shared

// OptionalClaim
// Specifying the claims to be included in a token.
type OptionalClaim struct {
	AdditionalProperties map[string]interface{} `json:"additionalProperties,omitempty"`
	Essential            *bool                  `json:"essential,omitempty"`
	Name                 *string                `json:"name,omitempty"`
	Source               *string                `json:"source,omitempty"`
}
