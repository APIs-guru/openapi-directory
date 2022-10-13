package shared

type ListSourceAccountResponseV2 struct {
	Content []SourceAccountResponseV2 `json:"content"`
	Links   []interface{}             `json:"links"`
	Page    *interface{}              `json:"page"`
}
