package shared

type LeaveLine struct {
	AnnualNumberOfUnits                        *float64                              `json:"AnnualNumberOfUnits,omitempty"`
	CalculationType                            *LeaveLineCalculationTypeEnum         `json:"CalculationType,omitempty"`
	EmploymentTerminationPaymentType           *EmploymentTerminationPaymentTypeEnum `json:"EmploymentTerminationPaymentType,omitempty"`
	EntitlementFinalPayPayoutType              *EntitlementFinalPayPayoutTypeEnum    `json:"EntitlementFinalPayPayoutType,omitempty"`
	FullTimeNumberOfUnitsPerPeriod             *float64                              `json:"FullTimeNumberOfUnitsPerPeriod,omitempty"`
	IncludeSuperannuationGuaranteeContribution *bool                                 `json:"IncludeSuperannuationGuaranteeContribution,omitempty"`
	LeaveTypeID                                *string                               `json:"LeaveTypeID,omitempty"`
	NumberOfUnits                              *float64                              `json:"NumberOfUnits,omitempty"`
}
