package shared

type ListFundingAccountsResponse2 struct {
	Content []FundingAccountResponse2 `json:"content"`
	Links   []interface{}             `json:"links"`
	Page    *interface{}              `json:"page"`
}
