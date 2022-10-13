package shared

type SuperannuationLine struct {
	Amount                   *float64                            `json:"Amount"`
	CalculationType          *SuperannuationCalculationTypeEnum  `json:"CalculationType"`
	ContributionType         *SuperannuationContributionTypeEnum `json:"ContributionType"`
	ExpenseAccountCode       *string                             `json:"ExpenseAccountCode"`
	LiabilityAccountCode     *string                             `json:"LiabilityAccountCode"`
	MinimumMonthlyEarnings   *float64                            `json:"MinimumMonthlyEarnings"`
	PaymentDateForThisPeriod *string                             `json:"PaymentDateForThisPeriod"`
	Percentage               *float64                            `json:"Percentage"`
	SuperMembershipID        *string                             `json:"SuperMembershipID"`
}
