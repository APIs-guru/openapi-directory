package shared

type Attribute struct {
	Label string                 `json:"label"`
	Value map[string]interface{} `json:"value"`
}
