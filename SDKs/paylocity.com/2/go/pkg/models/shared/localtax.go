package shared

type LocalTax struct {
	Exemptions   *float64 `json:"exemptions"`
	Exemptions2  *float64 `json:"exemptions2"`
	FilingStatus *string  `json:"filingStatus"`
	ResidentPsd  *string  `json:"residentPSD"`
	TaxCode      *string  `json:"taxCode"`
	WorkPsd      *string  `json:"workPSD"`
}
