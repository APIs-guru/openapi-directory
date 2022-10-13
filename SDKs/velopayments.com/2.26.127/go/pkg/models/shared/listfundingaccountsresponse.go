package shared

type ListFundingAccountsResponse struct {
	Content []FundingAccountResponse `json:"content"`
	Links   []interface{}            `json:"links"`
	Page    *interface{}             `json:"page"`
}
