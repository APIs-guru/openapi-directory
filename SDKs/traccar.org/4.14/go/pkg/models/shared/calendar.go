package shared

type Calendar struct {
	Attributes map[string]interface{} `json:"attributes,omitempty"`
	Data       *string                `json:"data,omitempty"`
	ID         *int64                 `json:"id,omitempty"`
	Name       *string                `json:"name,omitempty"`
}
