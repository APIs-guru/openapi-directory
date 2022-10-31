package shared

type ListSourceAccountResponseV3 struct {
	Content []SourceAccountResponseV3 `json:"content,omitempty"`
	Links   []interface{}             `json:"links,omitempty"`
	Page    *interface{}              `json:"page,omitempty"`
}
