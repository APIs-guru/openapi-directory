package shared

type TaxLine struct {
	Amount           *float64           `json:"Amount"`
	Description      *string            `json:"Description"`
	LiabilityAccount *string            `json:"LiabilityAccount"`
	ManualTaxType    *ManualTaxTypeEnum `json:"ManualTaxType"`
	PayslipTaxLineID *string            `json:"PayslipTaxLineID"`
	TaxTypeName      *string            `json:"TaxTypeName"`
}
