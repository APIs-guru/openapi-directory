package shared

import (
	"time"
)

type PensionPensionPensionablePayCodesPensionablePayCodes struct {
	PayCode []string `json:"PayCode"`
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
	PayCode []string `json:"PayCode"`
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
	AeCompatible                *bool                                                     `json:"AECompatible"`
	Code                        *string                                                   `json:"Code"`
	ContributionDeductionDay    *int32                                                    `json:"ContributionDeductionDay"`
	EffectiveDate               *time.Time                                                `json:"EffectiveDate"`
	EmployeeContributionCash    *float64                                                  `json:"EmployeeContributionCash"`
	EmployeeContributionPercent *float64                                                  `json:"EmployeeContributionPercent"`
	EmployerContributionCash    *float64                                                  `json:"EmployerContributionCash"`
	EmployerContributionPercent *float64                                                  `json:"EmployerContributionPercent"`
	EmployerNiSaving            *bool                                                     `json:"EmployerNiSaving"`
	EmployerNiSavingPercentage  *float64                                                  `json:"EmployerNiSavingPercentage"`
	Group                       *string                                                   `json:"Group"`
	LowerThreshold              *float64                                                  `json:"LowerThreshold"`
	MetaData                    map[string]interface{}                                    `json:"MetaData"`
	PensionablePayCodes         *PensionPensionPensionablePayCodesPensionablePayCodes     `json:"PensionablePayCodes"`
	ProRataMethod               *PensionPensionProRataMethodProRataMethodEnum             `json:"ProRataMethod"`
	ProviderEmployerRef         *string                                                   `json:"ProviderEmployerRef"`
	ProviderName                *string                                                   `json:"ProviderName"`
	QualifyingPayCodes          *PensionPensionQualifyingPayCodesQualifyingPayCodes       `json:"QualifyingPayCodes"`
	RasRoundingOverride         *PensionPensionRasRoundingOverrideRasRoundingOverrideEnum `json:"RasRoundingOverride"`
	Revision                    *int32                                                    `json:"Revision"`
	RoundingOption              *PensionPensionRoundingOptionRoundingOptionEnum           `json:"RoundingOption"`
	SalarySacrifice             *bool                                                     `json:"SalarySacrifice"`
	SchemeName                  *string                                                   `json:"SchemeName"`
	SubGroup                    *string                                                   `json:"SubGroup"`
	TaxationMethod              *PensionPensionTaxationMethodTaxationMethodEnum           `json:"TaxationMethod"`
	UpperThreshold              *float64                                                  `json:"UpperThreshold"`
	UseAeThresholds             *bool                                                     `json:"UseAEThresholds"`
}

type Pension struct {
	Pension *PensionPensionPension `json:"Pension"`
}
