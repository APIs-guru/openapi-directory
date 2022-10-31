package shared

type Group struct {
	Attributes map[string]interface{} `json:"attributes,omitempty"`
	GroupID    *int64                 `json:"groupId,omitempty"`
	ID         *int64                 `json:"id,omitempty"`
	Name       *string                `json:"name,omitempty"`
}
