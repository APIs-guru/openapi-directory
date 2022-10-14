package shared

type Maintenance struct {
	Attributes map[string]interface{} `json:"attributes,omitempty"`
	ID         *int64                 `json:"id,omitempty"`
	Name       *string                `json:"name,omitempty"`
	Period     *float64               `json:"period,omitempty"`
	Start      *float64               `json:"start,omitempty"`
	Type       *string                `json:"type,omitempty"`
}
