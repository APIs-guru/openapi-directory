package shared

import (
	"time"
)

type CodeSourceTypeEnum string

const (
	CodeSourceTypeEnumPatientview CodeSourceTypeEnum = "PATIENTVIEW"
	CodeSourceTypeEnumNhsChoices  CodeSourceTypeEnum = "NHS_CHOICES"
)

type Code struct {
	Code                *string                `json:"code"`
	CodeCategories      []CodeCategory         `json:"codeCategories"`
	CodeType            *Lookup                `json:"codeType"`
	Created             *time.Time             `json:"created"`
	Description         *string                `json:"description"`
	DisplayOrder        *int32                 `json:"displayOrder"`
	ExternalStandards   []CodeExternalStandard `json:"externalStandards"`
	FullDescription     *string                `json:"fullDescription"`
	HideFromPatients    *bool                  `json:"hideFromPatients"`
	ID                  *int64                 `json:"id"`
	LastUpdate          *time.Time             `json:"lastUpdate"`
	Links               []Link                 `json:"links"`
	PatientFriendlyName *string                `json:"patientFriendlyName"`
	RemovedExternally   *bool                  `json:"removedExternally"`
	SourceType          *CodeSourceTypeEnum    `json:"sourceType"`
	StandardType        *Lookup                `json:"standardType"`
}
