package shared

// ListSourceAccountResponseV2
// List Source Accounts Response Object
type ListSourceAccountResponseV2 struct {
	Content []SourceAccountResponseV2 `json:"content,omitempty"`
	Links   []interface{}             `json:"links,omitempty"`
	Page    *interface{}              `json:"page,omitempty"`
}
