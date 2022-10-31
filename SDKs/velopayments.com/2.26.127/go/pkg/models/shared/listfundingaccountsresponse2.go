package shared

type ListFundingAccountsResponse2 struct {
	Content []FundingAccountResponse2 `json:"content,omitempty"`
	Links   []interface{}             `json:"links,omitempty"`
	Page    *interface{}              `json:"page,omitempty"`
}
