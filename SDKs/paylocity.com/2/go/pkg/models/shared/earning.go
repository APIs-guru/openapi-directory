package shared



type Earning struct {
    Agency *string `json:"agency,omitempty"`
    Amount *float64 `json:"amount,omitempty"`
    AnnualMaximum *float64 `json:"annualMaximum,omitempty"`
    CalculationCode *string `json:"calculationCode,omitempty"`
    CostCenter1 *string `json:"costCenter1,omitempty"`
    CostCenter2 *string `json:"costCenter2,omitempty"`
    CostCenter3 *string `json:"costCenter3,omitempty"`
    EarningCode string `json:"earningCode"`
    EffectiveDate *string `json:"effectiveDate,omitempty"`
    EndDate *string `json:"endDate,omitempty"`
    Frequency *string `json:"frequency,omitempty"`
    Goal *float64 `json:"goal,omitempty"`
    HoursOrUnits *float64 `json:"hoursOrUnits,omitempty"`
    IsSelfInsured *bool `json:"isSelfInsured,omitempty"`
    JobCode *string `json:"jobCode,omitempty"`
    MiscellaneousInfo *string `json:"miscellaneousInfo,omitempty"`
    PaidTowardsGoal *float64 `json:"paidTowardsGoal,omitempty"`
    PayPeriodMaximum *float64 `json:"payPeriodMaximum,omitempty"`
    PayPeriodMinimum *float64 `json:"payPeriodMinimum,omitempty"`
    Rate *float64 `json:"rate,omitempty"`
    RateCode *string `json:"rateCode,omitempty"`
    StartDate string `json:"startDate"`
    
}

