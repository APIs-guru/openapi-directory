package shared

type ListSourceAccountResponse struct {
	Content []SourceAccountResponse `json:"content"`
	Links   []interface{}           `json:"links"`
	Page    *interface{}            `json:"page"`
}
