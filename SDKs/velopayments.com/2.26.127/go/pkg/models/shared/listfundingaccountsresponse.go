package shared



type ListFundingAccountsResponse struct {
    Content []FundingAccountResponse `json:"content,omitempty"`
    Links []interface{} `json:"links,omitempty"`
    Page *interface{} `json:"page,omitempty"`
    
}

