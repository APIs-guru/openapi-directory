package shared

type Calendar struct {
	Attributes map[string]interface{} `json:"attributes"`
	Data       *string                `json:"data"`
	ID         *int64                 `json:"id"`
	Name       *string                `json:"name"`
}
