package shared

type Parameter struct {
	Description *string      `json:"description"`
	ID          string       `json:"id"`
	Overridable *bool        `json:"overridable"`
	Value       *interface{} `json:"value"`
}
