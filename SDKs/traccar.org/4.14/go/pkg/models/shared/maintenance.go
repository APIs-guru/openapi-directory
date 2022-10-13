package shared

type Maintenance struct {
	Attributes map[string]interface{} `json:"attributes"`
	ID         *int64                 `json:"id"`
	Name       *string                `json:"name"`
	Period     *float64               `json:"period"`
	Start      *float64               `json:"start"`
	Type       *string                `json:"type"`
}
