package shared

type BenefitSetup struct {
	BenefitClass                   *string  `json:"benefitClass"`
	BenefitClassEffectiveDate      *string  `json:"benefitClassEffectiveDate"`
	BenefitSalary                  *float64 `json:"benefitSalary"`
	BenefitSalaryEffectiveDate     *string  `json:"benefitSalaryEffectiveDate"`
	DoNotApplyAdministrativePeriod *bool    `json:"doNotApplyAdministrativePeriod"`
	IsMeasureAcaEligibility        *bool    `json:"isMeasureAcaEligibility"`
}
