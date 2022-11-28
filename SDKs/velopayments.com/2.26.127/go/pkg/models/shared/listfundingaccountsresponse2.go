package shared

// ListFundingAccountsResponse2
// List Funding Accounts Response Object
type ListFundingAccountsResponse2 struct {
	Content []FundingAccountResponse2 `json:"content,omitempty"`
	Links   []interface{}             `json:"links,omitempty"`
	Page    *interface{}              `json:"page,omitempty"`
}
