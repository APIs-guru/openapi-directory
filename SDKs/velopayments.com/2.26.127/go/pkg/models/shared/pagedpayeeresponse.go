package shared

// PagedPayeeResponse
// List Payees Response Object
type PagedPayeeResponse struct {
	Content []GetPayeeListResponse `json:"content,omitempty"`
	Links   []interface{}          `json:"links,omitempty"`
	Page    *interface{}           `json:"page,omitempty"`
	Summary *interface{}           `json:"summary,omitempty"`
}
