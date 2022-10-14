package shared

type Parameter struct {
	Description *string      `json:"description,omitempty"`
	ID          string       `json:"id"`
	Overridable *bool        `json:"overridable,omitempty"`
	Value       *interface{} `json:"value,omitempty"`
}
