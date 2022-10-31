package shared

type PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse struct {
	Content []FundingPayorStatusAuditResponse `json:"content,omitempty"`
	Links   []LinkForResponse                 `json:"links,omitempty"`
	Page    *PageForResponse                  `json:"page,omitempty"`
}
