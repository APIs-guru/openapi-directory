package shared

// BenefitSetup
// The benefit setup model
type BenefitSetup struct {
	BenefitClass                   *string  `json:"benefitClass,omitempty"`
	BenefitClassEffectiveDate      *string  `json:"benefitClassEffectiveDate,omitempty"`
	BenefitSalary                  *float64 `json:"benefitSalary,omitempty"`
	BenefitSalaryEffectiveDate     *string  `json:"benefitSalaryEffectiveDate,omitempty"`
	DoNotApplyAdministrativePeriod *bool    `json:"doNotApplyAdministrativePeriod,omitempty"`
	IsMeasureAcaEligibility        *bool    `json:"isMeasureAcaEligibility,omitempty"`
}
