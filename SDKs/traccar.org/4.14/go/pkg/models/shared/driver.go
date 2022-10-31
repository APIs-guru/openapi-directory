package shared

type Driver struct {
	Attributes map[string]interface{} `json:"attributes,omitempty"`
	ID         *int64                 `json:"id,omitempty"`
	Name       *string                `json:"name,omitempty"`
	UniqueID   *string                `json:"uniqueId,omitempty"`
}
