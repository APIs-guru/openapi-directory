package shared

import (
	"time"
)

type PensionPensionPensionablePayCodes struct {
	PayCode []string `json:"PayCode,omitempty"`
}

type PensionPensionProRataMethodEnum string

const (
	PensionPensionProRataMethodEnumNotSet                      PensionPensionProRataMethodEnum = "NotSet"
	PensionPensionProRataMethodEnumAnnual260Days               PensionPensionProRataMethodEnum = "Annual260Days"
	PensionPensionProRataMethodEnumAnnual365Days               PensionPensionProRataMethodEnum = "Annual365Days"
	PensionPensionProRataMethodEnumAnnualQualifyingDays        PensionPensionProRataMethodEnum = "AnnualQualifyingDays"
	PensionPensionProRataMethodEnumDaysPerCalendarMonth        PensionPensionProRataMethodEnum = "DaysPerCalendarMonth"
	PensionPensionProRataMethodEnumDaysPerTaxPeriod            PensionPensionProRataMethodEnum = "DaysPerTaxPeriod"
	PensionPensionProRataMethodEnumWorkingDaysPerCalendarMonth PensionPensionProRataMethodEnum = "WorkingDaysPerCalendarMonth"
	PensionPensionProRataMethodEnumWeekDaysPerCalendarMonth    PensionPensionProRataMethodEnum = "WeekDaysPerCalendarMonth"
)

type PensionPensionQualifyingPayCodes struct {
	PayCode []string `json:"PayCode,omitempty"`
}

type PensionPensionRasRoundingOverrideEnum string

const (
	PensionPensionRasRoundingOverrideEnumNotSet    PensionPensionRasRoundingOverrideEnum = "NotSet"
	PensionPensionRasRoundingOverrideEnumPennyUp   PensionPensionRasRoundingOverrideEnum = "PennyUp"
	PensionPensionRasRoundingOverrideEnumPennyDown PensionPensionRasRoundingOverrideEnum = "PennyDown"
	PensionPensionRasRoundingOverrideEnumBankers   PensionPensionRasRoundingOverrideEnum = "Bankers"
	PensionPensionRasRoundingOverrideEnumFiveUp    PensionPensionRasRoundingOverrideEnum = "FiveUp"
	PensionPensionRasRoundingOverrideEnumFiveDown  PensionPensionRasRoundingOverrideEnum = "FiveDown"
	PensionPensionRasRoundingOverrideEnumFloor     PensionPensionRasRoundingOverrideEnum = "Floor"
	PensionPensionRasRoundingOverrideEnumCeiling   PensionPensionRasRoundingOverrideEnum = "Ceiling"
)

type PensionPensionRoundingOptionEnum string

const (
	PensionPensionRoundingOptionEnumNotSet    PensionPensionRoundingOptionEnum = "NotSet"
	PensionPensionRoundingOptionEnumPennyUp   PensionPensionRoundingOptionEnum = "PennyUp"
	PensionPensionRoundingOptionEnumPennyDown PensionPensionRoundingOptionEnum = "PennyDown"
	PensionPensionRoundingOptionEnumBankers   PensionPensionRoundingOptionEnum = "Bankers"
	PensionPensionRoundingOptionEnumFiveUp    PensionPensionRoundingOptionEnum = "FiveUp"
	PensionPensionRoundingOptionEnumFiveDown  PensionPensionRoundingOptionEnum = "FiveDown"
	PensionPensionRoundingOptionEnumFloor     PensionPensionRoundingOptionEnum = "Floor"
	PensionPensionRoundingOptionEnumCeiling   PensionPensionRoundingOptionEnum = "Ceiling"
)

type PensionPensionTaxationMethodEnum string

const (
	PensionPensionTaxationMethodEnumNotSet            PensionPensionTaxationMethodEnum = "NotSet"
	PensionPensionTaxationMethodEnumNetBased          PensionPensionTaxationMethodEnum = "NetBased"
	PensionPensionTaxationMethodEnumReliefAtSource    PensionPensionTaxationMethodEnum = "ReliefAtSource"
	PensionPensionTaxationMethodEnumTaxReliefExcluded PensionPensionTaxationMethodEnum = "TaxReliefExcluded"
)

type PensionPension struct {
	AeCompatible                *bool                                  `json:"AECompatible,omitempty"`
	Code                        *string                                `json:"Code,omitempty"`
	ContributionDeductionDay    *int32                                 `json:"ContributionDeductionDay,omitempty"`
	EffectiveDate               *time.Time                             `json:"EffectiveDate,omitempty"`
	EmployeeContributionCash    *float64                               `json:"EmployeeContributionCash,omitempty"`
	EmployeeContributionPercent *float64                               `json:"EmployeeContributionPercent,omitempty"`
	EmployerContributionCash    *float64                               `json:"EmployerContributionCash,omitempty"`
	EmployerContributionPercent *float64                               `json:"EmployerContributionPercent,omitempty"`
	EmployerNiSaving            *bool                                  `json:"EmployerNiSaving,omitempty"`
	EmployerNiSavingPercentage  *float64                               `json:"EmployerNiSavingPercentage,omitempty"`
	Group                       *string                                `json:"Group,omitempty"`
	LowerThreshold              *float64                               `json:"LowerThreshold,omitempty"`
	MetaData                    map[string]interface{}                 `json:"MetaData,omitempty"`
	PensionablePayCodes         *PensionPensionPensionablePayCodes     `json:"PensionablePayCodes,omitempty"`
	ProRataMethod               *PensionPensionProRataMethodEnum       `json:"ProRataMethod,omitempty"`
	ProviderEmployerRef         *string                                `json:"ProviderEmployerRef,omitempty"`
	ProviderName                *string                                `json:"ProviderName,omitempty"`
	QualifyingPayCodes          *PensionPensionQualifyingPayCodes      `json:"QualifyingPayCodes,omitempty"`
	RasRoundingOverride         *PensionPensionRasRoundingOverrideEnum `json:"RasRoundingOverride,omitempty"`
	Revision                    *int32                                 `json:"Revision,omitempty"`
	RoundingOption              *PensionPensionRoundingOptionEnum      `json:"RoundingOption,omitempty"`
	SalarySacrifice             *bool                                  `json:"SalarySacrifice,omitempty"`
	SchemeName                  *string                                `json:"SchemeName,omitempty"`
	SubGroup                    *string                                `json:"SubGroup,omitempty"`
	TaxationMethod              *PensionPensionTaxationMethodEnum      `json:"TaxationMethod,omitempty"`
	UpperThreshold              *float64                               `json:"UpperThreshold,omitempty"`
	UseAeThresholds             *bool                                  `json:"UseAEThresholds,omitempty"`
}

type Pension struct {
	Pension *PensionPension `json:"Pension,omitempty"`
}
