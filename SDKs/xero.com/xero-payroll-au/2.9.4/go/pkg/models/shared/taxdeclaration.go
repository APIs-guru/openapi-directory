package shared

type TaxDeclaration struct {
	ApprovedWithholdingVariationPercentage *float64              `json:"ApprovedWithholdingVariationPercentage"`
	AustralianResidentForTaxPurposes       *bool                 `json:"AustralianResidentForTaxPurposes"`
	EligibleToReceiveLeaveLoading          *bool                 `json:"EligibleToReceiveLeaveLoading"`
	EmployeeID                             *string               `json:"EmployeeID"`
	EmploymentBasis                        *EmploymentBasisEnum  `json:"EmploymentBasis"`
	HasHelpDebt                            *bool                 `json:"HasHELPDebt"`
	HasSfssDebt                            *bool                 `json:"HasSFSSDebt"`
	HasStudentStartupLoan                  *bool                 `json:"HasStudentStartupLoan"`
	HasTradeSupportLoanDebt                *bool                 `json:"HasTradeSupportLoanDebt"`
	ResidencyStatus                        *ResidencyStatusEnum  `json:"ResidencyStatus"`
	TfnExemptionType                       *TfnExemptionTypeEnum `json:"TFNExemptionType"`
	TaxFileNumber                          *string               `json:"TaxFileNumber"`
	TaxFreeThresholdClaimed                *bool                 `json:"TaxFreeThresholdClaimed"`
	TaxOffsetEstimatedAmount               *float64              `json:"TaxOffsetEstimatedAmount"`
	UpdatedDateUtc                         *string               `json:"UpdatedDateUTC"`
	UpwardVariationTaxWithholdingAmount    *float64              `json:"UpwardVariationTaxWithholdingAmount"`
}
