package shared



type CisLineTypeCisLineTypeNominalCode struct {
    AtHref *string `json:"@href,omitempty"`
    AtRel *string `json:"@rel,omitempty"`
    AtTitle *string `json:"@title,omitempty"`
    
}


type CisLineTypeCisLineTypeTaxTreatmentEnum string

const (
    CisLineTypeCisLineTypeTaxTreatmentEnumTaxable CisLineTypeCisLineTypeTaxTreatmentEnum = "Taxable"
CisLineTypeCisLineTypeTaxTreatmentEnumNonTaxable CisLineTypeCisLineTypeTaxTreatmentEnum = "NonTaxable"
CisLineTypeCisLineTypeTaxTreatmentEnumNotional CisLineTypeCisLineTypeTaxTreatmentEnum = "Notional"
CisLineTypeCisLineTypeTaxTreatmentEnumMaterials CisLineTypeCisLineTypeTaxTreatmentEnum = "Materials"
)


type CisLineTypeCisLineType struct {
    Description *string `json:"Description,omitempty"`
    LineType *string `json:"LineType,omitempty"`
    NominalCode *CisLineTypeCisLineTypeNominalCode `json:"NominalCode,omitempty"`
    TaxTreatment *CisLineTypeCisLineTypeTaxTreatmentEnum `json:"TaxTreatment,omitempty"`
    
}

type CisLineType struct {
    CisLineType *CisLineTypeCisLineType `json:"CisLineType,omitempty"`
    
}

