package shared

type SourceAccountV3 struct {
	Currency          string `json:"currency"`
	SourceAccountID   string `json:"sourceAccountId"`
	SourceAccountName string `json:"sourceAccountName"`
	TotalPayoutCost   int64  `json:"totalPayoutCost"`
}
