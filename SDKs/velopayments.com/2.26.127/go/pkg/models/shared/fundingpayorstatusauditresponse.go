package shared

type FundingPayorStatusAuditResponse struct {
	Amount    *int64  `json:"amount,omitempty"`
	Currency  *string `json:"currency,omitempty"`
	FundingID *string `json:"fundingId,omitempty"`
	Status    *string `json:"status,omitempty"`
}
