package shared

import (
"time")

type JournalLineJournalLineEmployee struct {
    AtHref *string `json:"@href,omitempty"`
    AtRel *string `json:"@rel,omitempty"`
    AtTitle *string `json:"@title,omitempty"`
    
}


type JournalLineJournalLinePayFrequencyEnum string

const (
    JournalLineJournalLinePayFrequencyEnumWeekly JournalLineJournalLinePayFrequencyEnum = "Weekly"
JournalLineJournalLinePayFrequencyEnumMonthly JournalLineJournalLinePayFrequencyEnum = "Monthly"
JournalLineJournalLinePayFrequencyEnumTwoWeekly JournalLineJournalLinePayFrequencyEnum = "TwoWeekly"
JournalLineJournalLinePayFrequencyEnumFourWeekly JournalLineJournalLinePayFrequencyEnum = "FourWeekly"
JournalLineJournalLinePayFrequencyEnumYearly JournalLineJournalLinePayFrequencyEnum = "Yearly"
)


type JournalLineJournalLinePayRun struct {
    AtHref *string `json:"@href,omitempty"`
    AtRel *string `json:"@rel,omitempty"`
    AtTitle *string `json:"@title,omitempty"`
    
}

type JournalLineJournalLineSubContractor struct {
    AtHref *string `json:"@href,omitempty"`
    AtRel *string `json:"@rel,omitempty"`
    AtTitle *string `json:"@title,omitempty"`
    
}

type JournalLineJournalLine struct {
    Credit *float64 `json:"Credit,omitempty"`
    Debit *float64 `json:"Debit,omitempty"`
    Description *string `json:"Description,omitempty"`
    Employee *JournalLineJournalLineEmployee `json:"Employee,omitempty"`
    Generated *time.Time `json:"Generated,omitempty"`
    Grouping *string `json:"Grouping,omitempty"`
    LedgerTarget *string `json:"LedgerTarget,omitempty"`
    NomCode *string `json:"NomCode,omitempty"`
    PayFrequency *JournalLineJournalLinePayFrequencyEnum `json:"PayFrequency,omitempty"`
    PayRun *JournalLineJournalLinePayRun `json:"PayRun,omitempty"`
    SubContractor *JournalLineJournalLineSubContractor `json:"SubContractor,omitempty"`
    SubNomCode *string `json:"SubNomCode,omitempty"`
    TaxPeriod *int32 `json:"TaxPeriod,omitempty"`
    TaxYear *int32 `json:"TaxYear,omitempty"`
    
}

type JournalLine struct {
    JournalLine *JournalLineJournalLine `json:"JournalLine,omitempty"`
    
}

