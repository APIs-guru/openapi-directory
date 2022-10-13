package shared

type Earning struct {
	Agency            *string  `json:"agency"`
	Amount            *float64 `json:"amount"`
	AnnualMaximum     *float64 `json:"annualMaximum"`
	CalculationCode   *string  `json:"calculationCode"`
	CostCenter1       *string  `json:"costCenter1"`
	CostCenter2       *string  `json:"costCenter2"`
	CostCenter3       *string  `json:"costCenter3"`
	EarningCode       string   `json:"earningCode"`
	EffectiveDate     *string  `json:"effectiveDate"`
	EndDate           *string  `json:"endDate"`
	Frequency         *string  `json:"frequency"`
	Goal              *float64 `json:"goal"`
	HoursOrUnits      *float64 `json:"hoursOrUnits"`
	IsSelfInsured     *bool    `json:"isSelfInsured"`
	JobCode           *string  `json:"jobCode"`
	MiscellaneousInfo *string  `json:"miscellaneousInfo"`
	PaidTowardsGoal   *float64 `json:"paidTowardsGoal"`
	PayPeriodMaximum  *float64 `json:"payPeriodMaximum"`
	PayPeriodMinimum  *float64 `json:"payPeriodMinimum"`
	Rate              *float64 `json:"rate"`
	RateCode          *string  `json:"rateCode"`
	StartDate         string   `json:"startDate"`
}
