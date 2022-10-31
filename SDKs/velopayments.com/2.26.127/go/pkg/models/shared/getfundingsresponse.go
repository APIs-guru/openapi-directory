package shared



type GetFundingsResponse struct {
    Content []FundingAudit `json:"content,omitempty"`
    Links []interface{} `json:"links,omitempty"`
    Page *interface{} `json:"page,omitempty"`
    
}

