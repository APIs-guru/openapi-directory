package shared

// ListFundingAccountsResponse
// List Source Accounts Response Object
type ListFundingAccountsResponse struct {
	Content []FundingAccountResponse `json:"content,omitempty"`
	Links   []interface{}            `json:"links,omitempty"`
	Page    *interface{}             `json:"page,omitempty"`
}
