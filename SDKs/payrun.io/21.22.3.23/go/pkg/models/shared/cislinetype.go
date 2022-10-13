package shared

type CisLineTypeCisLineTypeNominalCodeNominalCode struct {
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
}

type CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnum string

const (
	CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnumTaxable    CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnum = "Taxable"
	CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnumNonTaxable CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnum = "NonTaxable"
	CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnumNotional   CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnum = "Notional"
	CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnumMaterials  CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnum = "Materials"
)

type CisLineTypeCisLineTypeCisLineType struct {
	Description  *string                                             `json:"Description"`
	LineType     *string                                             `json:"LineType"`
	NominalCode  *CisLineTypeCisLineTypeNominalCodeNominalCode       `json:"NominalCode"`
	TaxTreatment *CisLineTypeCisLineTypeTaxTreatmentTaxTreatmentEnum `json:"TaxTreatment"`
}

type CisLineType struct {
	CisLineType *CisLineTypeCisLineTypeCisLineType `json:"CisLineType"`
}
