package shared

type PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse struct {
	Content []FundingPayorStatusAuditResponse `json:"content"`
	Links   []LinkForResponse                 `json:"links"`
	Page    *PageForResponse                  `json:"page"`
}
