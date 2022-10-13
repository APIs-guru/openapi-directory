package shared

type EarningsRate struct {
	AccountCode                      *string                               `json:"AccountCode"`
	AccrueLeave                      *bool                                 `json:"AccrueLeave"`
	AllowanceType                    *AllowanceTypeEnum                    `json:"AllowanceType"`
	Amount                           *float64                              `json:"Amount"`
	CurrentRecord                    *bool                                 `json:"CurrentRecord"`
	EarningsRateID                   *string                               `json:"EarningsRateID"`
	EarningsType                     *EarningsTypeEnum                     `json:"EarningsType"`
	EmploymentTerminationPaymentType *EmploymentTerminationPaymentTypeEnum `json:"EmploymentTerminationPaymentType"`
	IsExemptFromSuper                *bool                                 `json:"IsExemptFromSuper"`
	IsExemptFromTax                  *bool                                 `json:"IsExemptFromTax"`
	IsReportableAsW1                 *bool                                 `json:"IsReportableAsW1"`
	Multiplier                       *float64                              `json:"Multiplier"`
	Name                             *string                               `json:"Name"`
	RatePerUnit                      *string                               `json:"RatePerUnit"`
	RateType                         *RateTypeEnum                         `json:"RateType"`
	TypeOfUnits                      *string                               `json:"TypeOfUnits"`
	UpdatedDateUtc                   *string                               `json:"UpdatedDateUTC"`
}
