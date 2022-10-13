package shared

type LeaveLine struct {
	AnnualNumberOfUnits                        *float64                              `json:"AnnualNumberOfUnits"`
	CalculationType                            *LeaveLineCalculationTypeEnum         `json:"CalculationType"`
	EmploymentTerminationPaymentType           *EmploymentTerminationPaymentTypeEnum `json:"EmploymentTerminationPaymentType"`
	EntitlementFinalPayPayoutType              *EntitlementFinalPayPayoutTypeEnum    `json:"EntitlementFinalPayPayoutType"`
	FullTimeNumberOfUnitsPerPeriod             *float64                              `json:"FullTimeNumberOfUnitsPerPeriod"`
	IncludeSuperannuationGuaranteeContribution *bool                                 `json:"IncludeSuperannuationGuaranteeContribution"`
	LeaveTypeID                                *string                               `json:"LeaveTypeID"`
	NumberOfUnits                              *float64                              `json:"NumberOfUnits"`
}
