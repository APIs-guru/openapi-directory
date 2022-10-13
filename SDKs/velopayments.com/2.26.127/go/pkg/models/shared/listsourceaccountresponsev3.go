package shared

type ListSourceAccountResponseV3 struct {
	Content []SourceAccountResponseV3 `json:"content"`
	Links   []interface{}             `json:"links"`
	Page    *interface{}              `json:"page"`
}
