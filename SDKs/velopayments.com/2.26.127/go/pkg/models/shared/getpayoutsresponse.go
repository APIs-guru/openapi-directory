package shared



type GetPayoutsResponse struct {
    Content []PayoutSummaryAudit `json:"content,omitempty"`
    Links []interface{} `json:"links,omitempty"`
    Page *interface{} `json:"page,omitempty"`
    
}

