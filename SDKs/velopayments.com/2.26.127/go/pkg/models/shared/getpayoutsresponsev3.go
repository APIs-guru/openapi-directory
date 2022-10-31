package shared



type GetPayoutsResponseV3 struct {
    Content []PayoutSummaryAuditV3 `json:"content,omitempty"`
    Links []interface{} `json:"links,omitempty"`
    Page *interface{} `json:"page,omitempty"`
    
}

