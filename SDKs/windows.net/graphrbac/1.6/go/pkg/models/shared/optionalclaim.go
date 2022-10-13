package shared

type OptionalClaim struct {
	AdditionalProperties map[string]interface{} `json:"additionalProperties"`
	Essential            *bool                  `json:"essential"`
	Name                 *string                `json:"name"`
	Source               *string                `json:"source"`
}
