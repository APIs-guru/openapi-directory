package shared

// ListSourceAccountResponse
// List Source Accounts Response Object
type ListSourceAccountResponse struct {
	Content []SourceAccountResponse `json:"content,omitempty"`
	Links   []interface{}           `json:"links,omitempty"`
	Page    *interface{}            `json:"page,omitempty"`
}
