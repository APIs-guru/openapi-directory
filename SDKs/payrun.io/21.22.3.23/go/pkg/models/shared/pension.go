package shared

import (
	"time"
)

type PensionPensionPensionablePayCodesPensionablePayCodes struct {
	PayCode []string `json:"PayCode,omitempty"`
}

type PensionPensionProRataMethodProRataMethodEnum string

const (
	PensionPensionProRataMethodProRataMethodEnumNotSet                      PensionPensionProRataMethodProRataMethodEnum = "NotSet"
	PensionPensionProRataMethodProRataMethodEnumAnnual260Days               PensionPensionProRataMethodProRataMethodEnum = "Annual260Days"
	PensionPensionProRataMethodProRataMethodEnumAnnual365Days               PensionPensionProRataMethodProRataMethodEnum = "Annual365Days"
	PensionPensionProRataMethodProRataMethodEnumAnnualQualifyingDays        PensionPensionProRataMethodProRataMethodEnum = "AnnualQualifyingDays"
	PensionPensionProRataMethodProRataMethodEnumDaysPerCalendarMonth        PensionPensionProRataMethodProRataMethodEnum = "DaysPerCalendarMonth"
	PensionPensionProRataMethodProRataMethodEnumDaysPerTaxPeriod            PensionPensionProRataMethodProRataMethodEnum = "DaysPerTaxPeriod"
	PensionPensionProRataMethodProRataMethodEnumWorkingDaysPerCalendarMonth PensionPensionProRataMethodProRataMethodEnum = "WorkingDaysPerCalendarMonth"
	PensionPensionProRataMethodProRataMethodEnumWeekDaysPerCalendarMonth    PensionPensionProRataMethodProRataMethodEnum = "WeekDaysPerCalendarMonth"
)

type PensionPensionQualifyingPayCodesQualifyingPayCodes struct {
	PayCode []string `json:"PayCode,omitempty"`
}

type PensionPensionRasRoundingOverrideRasRoundingOverrideEnum string

const (
	PensionPensionRasRoundingOverrideRasRoundingOverrideEnumNotSet    PensionPensionRasRoundingOverrideRasRoundingOverrideEnum = "NotSet"
	PensionPensionRasRoundingOverrideRasRoundingOverrideEnumPennyUp   PensionPensionRasRoundingOverrideRasRoundingOverrideEnum = "PennyUp"
	PensionPensionRasRoundingOverrideRasRoundingOverrideEnumPennyDown PensionPensionRasRoundingOverrideRasRoundingOverrideEnum = "PennyDown"
	PensionPensionRasRoundingOverrideRasRoundingOverrideEnumBankers   PensionPensionRasRoundingOverrideRasRoundingOverrideEnum = "Bankers"
	PensionPensionRasRoundingOverrideRasRoundingOverrideEnumFiveUp    PensionPensionRasRoundingOverrideRasRoundingOverrideEnum = "FiveUp"
	PensionPensionRasRoundingOverrideRasRoundingOverrideEnumFiveDown  PensionPensionRasRoundingOverrideRasRoundingOverrideEnum = "FiveDown"
	PensionPensionRasRoundingOverrideRasRoundingOverrideEnumFloor     PensionPensionRasRoundingOverrideRasRoundingOverrideEnum = "Floor"
	PensionPensionRasRoundingOverrideRasRoundingOverrideEnumCeiling   PensionPensionRasRoundingOverrideRasRoundingOverrideEnum = "Ceiling"
)

type PensionPensionRoundingOptionRoundingOptionEnum string

const (
	PensionPensionRoundingOptionRoundingOptionEnumNotSet    PensionPensionRoundingOptionRoundingOptionEnum = "NotSet"
	PensionPensionRoundingOptionRoundingOptionEnumPennyUp   PensionPensionRoundingOptionRoundingOptionEnum = "PennyUp"
	PensionPensionRoundingOptionRoundingOptionEnumPennyDown PensionPensionRoundingOptionRoundingOptionEnum = "PennyDown"
	PensionPensionRoundingOptionRoundingOptionEnumBankers   PensionPensionRoundingOptionRoundingOptionEnum = "Bankers"
	PensionPensionRoundingOptionRoundingOptionEnumFiveUp    PensionPensionRoundingOptionRoundingOptionEnum = "FiveUp"
	PensionPensionRoundingOptionRoundingOptionEnumFiveDown  PensionPensionRoundingOptionRoundingOptionEnum = "FiveDown"
	PensionPensionRoundingOptionRoundingOptionEnumFloor     PensionPensionRoundingOptionRoundingOptionEnum = "Floor"
	PensionPensionRoundingOptionRoundingOptionEnumCeiling   PensionPensionRoundingOptionRoundingOptionEnum = "Ceiling"
)

type PensionPensionTaxationMethodTaxationMethodEnum string

const (
	PensionPensionTaxationMethodTaxationMethodEnumNotSet            PensionPensionTaxationMethodTaxationMethodEnum = "NotSet"
	PensionPensionTaxationMethodTaxationMethodEnumNetBased          PensionPensionTaxationMethodTaxationMethodEnum = "NetBased"
	PensionPensionTaxationMethodTaxationMethodEnumReliefAtSource    PensionPensionTaxationMethodTaxationMethodEnum = "ReliefAtSource"
	PensionPensionTaxationMethodTaxationMethodEnumTaxReliefExcluded PensionPensionTaxationMethodTaxationMethodEnum = "TaxReliefExcluded"
)

type PensionPensionPension struct {
	AeCompatible                *bool                                                     `json:"AECompatible,omitempty"`
	Code                        *string                                                   `json:"Code,omitempty"`
	ContributionDeductionDay    *int32                                                    `json:"ContributionDeductionDay,omitempty"`
	EffectiveDate               *time.Time                                                `json:"EffectiveDate,omitempty"`
	EmployeeContributionCash    *float64                                                  `json:"EmployeeContributionCash,omitempty"`
	EmployeeContributionPercent *float64                                                  `json:"EmployeeContributionPercent,omitempty"`
	EmployerContributionCash    *float64                                                  `json:"EmployerContributionCash,omitempty"`
	EmployerContributionPercent *float64                                                  `json:"EmployerContributionPercent,omitempty"`
	EmployerNiSaving            *bool                                                     `json:"EmployerNiSaving,omitempty"`
	EmployerNiSavingPercentage  *float64                                                  `json:"EmployerNiSavingPercentage,omitempty"`
	Group                       *string                                                   `json:"Group,omitempty"`
	LowerThreshold              *float64                                                  `json:"LowerThreshold,omitempty"`
	MetaData                    map[string]interface{}                                    `json:"MetaData,omitempty"`
	PensionablePayCodes         *PensionPensionPensionablePayCodesPensionablePayCodes     `json:"PensionablePayCodes,omitempty"`
	ProRataMethod               *PensionPensionProRataMethodProRataMethodEnum             `json:"ProRataMethod,omitempty"`
	ProviderEmployerRef         *string                                                   `json:"ProviderEmployerRef,omitempty"`
	ProviderName                *string                                                   `json:"ProviderName,omitempty"`
	QualifyingPayCodes          *PensionPensionQualifyingPayCodesQualifyingPayCodes       `json:"QualifyingPayCodes,omitempty"`
	RasRoundingOverride         *PensionPensionRasRoundingOverrideRasRoundingOverrideEnum `json:"RasRoundingOverride,omitempty"`
	Revision                    *int32                                                    `json:"Revision,omitempty"`
	RoundingOption              *PensionPensionRoundingOptionRoundingOptionEnum           `json:"RoundingOption,omitempty"`
	SalarySacrifice             *bool                                                     `json:"SalarySacrifice,omitempty"`
	SchemeName                  *string                                                   `json:"SchemeName,omitempty"`
	SubGroup                    *string                                                   `json:"SubGroup,omitempty"`
	TaxationMethod              *PensionPensionTaxationMethodTaxationMethodEnum           `json:"TaxationMethod,omitempty"`
	UpperThreshold              *float64                                                  `json:"UpperThreshold,omitempty"`
	UseAeThresholds             *bool                                                     `json:"UseAEThresholds,omitempty"`
}

type Pension struct {
	Pension *PensionPensionPension `json:"Pension,omitempty"`
}
