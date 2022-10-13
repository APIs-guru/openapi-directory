package shared

type Driver struct {
	Attributes map[string]interface{} `json:"attributes"`
	ID         *int64                 `json:"id"`
	Name       *string                `json:"name"`
	UniqueID   *string                `json:"uniqueId"`
}
