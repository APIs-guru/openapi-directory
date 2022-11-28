package shared

type TaxDeclaration struct {
	ApprovedWithholdingVariationPercentage *float64              `json:"ApprovedWithholdingVariationPercentage,omitempty"`
	AustralianResidentForTaxPurposes       *bool                 `json:"AustralianResidentForTaxPurposes,omitempty"`
	EligibleToReceiveLeaveLoading          *bool                 `json:"EligibleToReceiveLeaveLoading,omitempty"`
	EmployeeID                             *string               `json:"EmployeeID,omitempty"`
	EmploymentBasis                        *EmploymentBasisEnum  `json:"EmploymentBasis,omitempty"`
	HasHelpDebt                            *bool                 `json:"HasHELPDebt,omitempty"`
	HasSfssDebt                            *bool                 `json:"HasSFSSDebt,omitempty"`
	HasStudentStartupLoan                  *bool                 `json:"HasStudentStartupLoan,omitempty"`
	HasTradeSupportLoanDebt                *bool                 `json:"HasTradeSupportLoanDebt,omitempty"`
	ResidencyStatus                        *ResidencyStatusEnum  `json:"ResidencyStatus,omitempty"`
	TfnExemptionType                       *TfnExemptionTypeEnum `json:"TFNExemptionType,omitempty"`
	TaxFileNumber                          *string               `json:"TaxFileNumber,omitempty"`
	TaxFreeThresholdClaimed                *bool                 `json:"TaxFreeThresholdClaimed,omitempty"`
	TaxOffsetEstimatedAmount               *float64              `json:"TaxOffsetEstimatedAmount,omitempty"`
	UpdatedDateUtc                         *string               `json:"UpdatedDateUTC,omitempty"`
	UpwardVariationTaxWithholdingAmount    *float64              `json:"UpwardVariationTaxWithholdingAmount,omitempty"`
}

type TaxDeclarationInput struct {
	ApprovedWithholdingVariationPercentage *float64              `json:"ApprovedWithholdingVariationPercentage,omitempty"`
	AustralianResidentForTaxPurposes       *bool                 `json:"AustralianResidentForTaxPurposes,omitempty"`
	EligibleToReceiveLeaveLoading          *bool                 `json:"EligibleToReceiveLeaveLoading,omitempty"`
	EmployeeID                             *string               `json:"EmployeeID,omitempty"`
	EmploymentBasis                        *EmploymentBasisEnum  `json:"EmploymentBasis,omitempty"`
	HasHelpDebt                            *bool                 `json:"HasHELPDebt,omitempty"`
	HasSfssDebt                            *bool                 `json:"HasSFSSDebt,omitempty"`
	HasStudentStartupLoan                  *bool                 `json:"HasStudentStartupLoan,omitempty"`
	HasTradeSupportLoanDebt                *bool                 `json:"HasTradeSupportLoanDebt,omitempty"`
	ResidencyStatus                        *ResidencyStatusEnum  `json:"ResidencyStatus,omitempty"`
	TfnExemptionType                       *TfnExemptionTypeEnum `json:"TFNExemptionType,omitempty"`
	TaxFileNumber                          *string               `json:"TaxFileNumber,omitempty"`
	TaxFreeThresholdClaimed                *bool                 `json:"TaxFreeThresholdClaimed,omitempty"`
	TaxOffsetEstimatedAmount               *float64              `json:"TaxOffsetEstimatedAmount,omitempty"`
	UpwardVariationTaxWithholdingAmount    *float64              `json:"UpwardVariationTaxWithholdingAmount,omitempty"`
}
