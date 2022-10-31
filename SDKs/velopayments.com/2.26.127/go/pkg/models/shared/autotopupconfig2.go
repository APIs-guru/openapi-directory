package shared

type AutoTopUpConfig2 struct {
	Enabled          bool    `json:"enabled"`
	FundingAccountID *string `json:"fundingAccountId,omitempty"`
	MinBalance       *int64  `json:"minBalance,omitempty"`
	TargetBalance    *int64  `json:"targetBalance,omitempty"`
}
