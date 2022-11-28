package shared

// GetFundingsResponse
// List Users Response Object
type GetFundingsResponse struct {
	Content []FundingAudit `json:"content,omitempty"`
	Links   []interface{}  `json:"links,omitempty"`
	Page    *interface{}   `json:"page,omitempty"`
}
