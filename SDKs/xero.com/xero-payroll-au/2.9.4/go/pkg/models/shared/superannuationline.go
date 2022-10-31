package shared

type SuperannuationLine struct {
	Amount                   *float64                            `json:"Amount,omitempty"`
	CalculationType          *SuperannuationCalculationTypeEnum  `json:"CalculationType,omitempty"`
	ContributionType         *SuperannuationContributionTypeEnum `json:"ContributionType,omitempty"`
	ExpenseAccountCode       *string                             `json:"ExpenseAccountCode,omitempty"`
	LiabilityAccountCode     *string                             `json:"LiabilityAccountCode,omitempty"`
	MinimumMonthlyEarnings   *float64                            `json:"MinimumMonthlyEarnings,omitempty"`
	PaymentDateForThisPeriod *string                             `json:"PaymentDateForThisPeriod,omitempty"`
	Percentage               *float64                            `json:"Percentage,omitempty"`
	SuperMembershipID        *string                             `json:"SuperMembershipID,omitempty"`
}
