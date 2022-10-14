package shared

type TaxLine struct {
	Amount           *float64           `json:"Amount,omitempty"`
	Description      *string            `json:"Description,omitempty"`
	LiabilityAccount *string            `json:"LiabilityAccount,omitempty"`
	ManualTaxType    *ManualTaxTypeEnum `json:"ManualTaxType,omitempty"`
	PayslipTaxLineID *string            `json:"PayslipTaxLineID,omitempty"`
	TaxTypeName      *string            `json:"TaxTypeName,omitempty"`
}
