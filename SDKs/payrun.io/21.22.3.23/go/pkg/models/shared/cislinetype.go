package shared

type CisLineTypeCisLineTypeNominalCodeNominalCode struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnum string

const (
	CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnumTaxable    CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnum = "Taxable"
	CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnumNonTaxable CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnum = "NonTaxable"
	CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnumNotional   CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnum = "Notional"
	CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnumMaterials  CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnum = "Materials"
)

type CisLineTypeCisLineTypeCisLineType struct {
	Description  *string                                             `json:"Description,omitempty"`
	LineType     *string                                             `json:"LineType,omitempty"`
	NominalCode  *CisLineTypeCisLineTypeNominalCodeNominalCode       `json:"NominalCode,omitempty"`
	TaxTreatment *CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnum `json:"TaxTreatment,omitempty"`
}

type CisLineType struct {
	CisLineType *CisLineTypeCisLineTypeCisLineType `json:"CisLineType,omitempty"`
}
