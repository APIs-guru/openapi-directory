package shared

type ListSourceAccountResponse struct {
	Content []SourceAccountResponse `json:"content,omitempty"`
	Links   []interface{}           `json:"links,omitempty"`
	Page    *interface{}            `json:"page,omitempty"`
}
