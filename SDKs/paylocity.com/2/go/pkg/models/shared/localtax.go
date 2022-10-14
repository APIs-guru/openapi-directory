package shared

type LocalTax struct {
	Exemptions   *float64 `json:"exemptions,omitempty"`
	Exemptions2  *float64 `json:"exemptions2,omitempty"`
	FilingStatus *string  `json:"filingStatus,omitempty"`
	ResidentPsd  *string  `json:"residentPSD,omitempty"`
	TaxCode      *string  `json:"taxCode,omitempty"`
	WorkPsd      *string  `json:"workPSD,omitempty"`
}
