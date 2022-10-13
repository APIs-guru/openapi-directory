package shared

type AutoTopUpConfig2 struct {
	Enabled          bool    `json:"enabled"`
	FundingAccountID *string `json:"fundingAccountId"`
	MinBalance       *int64  `json:"minBalance"`
	TargetBalance    *int64  `json:"targetBalance"`
}
