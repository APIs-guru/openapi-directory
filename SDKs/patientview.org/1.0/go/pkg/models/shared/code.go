package shared

import (
"time")


type CodeSourceTypeEnum string

const (
    CodeSourceTypeEnumPatientview CodeSourceTypeEnum = "PATIENTVIEW"
CodeSourceTypeEnumNhsChoices CodeSourceTypeEnum = "NHS_CHOICES"
)


type Code struct {
    Code *string `json:"code,omitempty"`
    CodeCategories []CodeCategory `json:"codeCategories,omitempty"`
    CodeType *Lookup `json:"codeType,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayOrder *int32 `json:"displayOrder,omitempty"`
    ExternalStandards []CodeExternalStandard `json:"externalStandards,omitempty"`
    FullDescription *string `json:"fullDescription,omitempty"`
    HideFromPatients *bool `json:"hideFromPatients,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastUpdate *time.Time `json:"lastUpdate,omitempty"`
    Links []Link `json:"links,omitempty"`
    PatientFriendlyName *string `json:"patientFriendlyName,omitempty"`
    RemovedExternally *bool `json:"removedExternally,omitempty"`
    SourceType *CodeSourceTypeEnum `json:"sourceType,omitempty"`
    StandardType *Lookup `json:"standardType,omitempty"`
    
}

