package shared

type Group struct {
	Attributes map[string]interface{} `json:"attributes"`
	GroupID    *int64                 `json:"groupId"`
	ID         *int64                 `json:"id"`
	Name       *string                `json:"name"`
}
