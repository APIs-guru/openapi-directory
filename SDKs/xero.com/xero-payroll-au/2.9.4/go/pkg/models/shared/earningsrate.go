package shared

type EarningsRate struct {
	AccountCode                      *string                               `json:"AccountCode,omitempty"`
	AccrueLeave                      *bool                                 `json:"AccrueLeave,omitempty"`
	AllowanceType                    *AllowanceTypeEnum                    `json:"AllowanceType,omitempty"`
	Amount                           *float64                              `json:"Amount,omitempty"`
	CurrentRecord                    *bool                                 `json:"CurrentRecord,omitempty"`
	EarningsRateID                   *string                               `json:"EarningsRateID,omitempty"`
	EarningsType                     *EarningsTypeEnum                     `json:"EarningsType,omitempty"`
	EmploymentTerminationPaymentType *EmploymentTerminationPaymentTypeEnum `json:"EmploymentTerminationPaymentType,omitempty"`
	IsExemptFromSuper                *bool                                 `json:"IsExemptFromSuper,omitempty"`
	IsExemptFromTax                  *bool                                 `json:"IsExemptFromTax,omitempty"`
	IsReportableAsW1                 *bool                                 `json:"IsReportableAsW1,omitempty"`
	Multiplier                       *float64                              `json:"Multiplier,omitempty"`
	Name                             *string                               `json:"Name,omitempty"`
	RatePerUnit                      *string                               `json:"RatePerUnit,omitempty"`
	RateType                         *RateTypeEnum                         `json:"RateType,omitempty"`
	TypeOfUnits                      *string                               `json:"TypeOfUnits,omitempty"`
	UpdatedDateUtc                   *string                               `json:"UpdatedDateUTC,omitempty"`
}

type EarningsRateInput struct {
	AccountCode                      *string                               `json:"AccountCode,omitempty"`
	AccrueLeave                      *bool                                 `json:"AccrueLeave,omitempty"`
	AllowanceType                    *AllowanceTypeEnum                    `json:"AllowanceType,omitempty"`
	Amount                           *float64                              `json:"Amount,omitempty"`
	CurrentRecord                    *bool                                 `json:"CurrentRecord,omitempty"`
	EarningsRateID                   *string                               `json:"EarningsRateID,omitempty"`
	EarningsType                     *EarningsTypeEnum                     `json:"EarningsType,omitempty"`
	EmploymentTerminationPaymentType *EmploymentTerminationPaymentTypeEnum `json:"EmploymentTerminationPaymentType,omitempty"`
	IsExemptFromSuper                *bool                                 `json:"IsExemptFromSuper,omitempty"`
	IsExemptFromTax                  *bool                                 `json:"IsExemptFromTax,omitempty"`
	IsReportableAsW1                 *bool                                 `json:"IsReportableAsW1,omitempty"`
	Multiplier                       *float64                              `json:"Multiplier,omitempty"`
	Name                             *string                               `json:"Name,omitempty"`
	RatePerUnit                      *string                               `json:"RatePerUnit,omitempty"`
	RateType                         *RateTypeEnum                         `json:"RateType,omitempty"`
	TypeOfUnits                      *string                               `json:"TypeOfUnits,omitempty"`
}
