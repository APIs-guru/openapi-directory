package shared

import (
	"time"
)

type JournalLineJournalLineEmployeeEmployee struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type JournalLineJournalLinePayFrequencyPayFrequencyEnum string

const (
	JournalLineJournalLinePayFrequencyPayFrequencyEnumWeekly     JournalLineJournalLinePayFrequencyPayFrequencyEnum = "Weekly"
	JournalLineJournalLinePayFrequencyPayFrequencyEnumMonthly    JournalLineJournalLinePayFrequencyPayFrequencyEnum = "Monthly"
	JournalLineJournalLinePayFrequencyPayFrequencyEnumTwoWeekly  JournalLineJournalLinePayFrequencyPayFrequencyEnum = "TwoWeekly"
	JournalLineJournalLinePayFrequencyPayFrequencyEnumFourWeekly JournalLineJournalLinePayFrequencyPayFrequencyEnum = "FourWeekly"
	JournalLineJournalLinePayFrequencyPayFrequencyEnumYearly     JournalLineJournalLinePayFrequencyPayFrequencyEnum = "Yearly"
)

type JournalLineJournalLinePayRunPayRun struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type JournalLineJournalLineSubContractorSubContractor struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type JournalLineJournalLineJournalLine struct {
	Credit        *float64                                            `json:"Credit,omitempty"`
	Debit         *float64                                            `json:"Debit,omitempty"`
	Description   *string                                             `json:"Description,omitempty"`
	Employee      *JournalLineJournalLineEmployeeEmployee             `json:"Employee,omitempty"`
	Generated     *time.Time                                          `json:"Generated,omitempty"`
	Grouping      *string                                             `json:"Grouping,omitempty"`
	LedgerTarget  *string                                             `json:"LedgerTarget,omitempty"`
	NomCode       *string                                             `json:"NomCode,omitempty"`
	PayFrequency  *JournalLineJournalLinePayFrequencyPayFrequencyEnum `json:"PayFrequency,omitempty"`
	PayRun        *JournalLineJournalLinePayRunPayRun                 `json:"PayRun,omitempty"`
	SubContractor *JournalLineJournalLineSubContractorSubContractor   `json:"SubContractor,omitempty"`
	SubNomCode    *string                                             `json:"SubNomCode,omitempty"`
	TaxPeriod     *int32                                              `json:"TaxPeriod,omitempty"`
	TaxYear       *int32                                              `json:"TaxYear,omitempty"`
}

type JournalLine struct {
	JournalLine *JournalLineJournalLineJournalLine `json:"JournalLine,omitempty"`
}
