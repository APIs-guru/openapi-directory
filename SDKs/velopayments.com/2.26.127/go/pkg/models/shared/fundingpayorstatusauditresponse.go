package shared

type FundingPayorStatusAuditResponse struct {
	Amount    *int64  `json:"amount"`
	Currency  *string `json:"currency"`
	FundingID *string `json:"fundingId"`
	Status    *string `json:"status"`
}
