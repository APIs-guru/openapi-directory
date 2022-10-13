package shared

import (
	"time"
)

type JournalLineJournalLineEmployeeEmployee struct {
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
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
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
}

type JournalLineJournalLineSubContractorSubContractor struct {
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
}

type JournalLineJournalLineJournalLine struct {
	Credit        *float64                                            `json:"Credit"`
	Debit         *float64                                            `json:"Debit"`
	Description   *string                                             `json:"Description"`
	Employee      *JournalLineJournalLineEmployeeEmployee             `json:"Employee"`
	Generated     *time.Time                                          `json:"Generated"`
	Grouping      *string                                             `json:"Grouping"`
	LedgerTarget  *string                                             `json:"LedgerTarget"`
	NomCode       *string                                             `json:"NomCode"`
	PayFrequency  *JournalLineJournalLinePayFrequencyPayFrequencyEnum `json:"PayFrequency"`
	PayRun        *JournalLineJournalLinePayRunPayRun                 `json:"PayRun"`
	SubContractor *JournalLineJournalLineSubContractorSubContractor   `json:"SubContractor"`
	SubNomCode    *string                                             `json:"SubNomCode"`
	TaxPeriod     *int32                                              `json:"TaxPeriod"`
	TaxYear       *int32                                              `json:"TaxYear"`
}

type JournalLine struct {
	JournalLine *JournalLineJournalLineJournalLine `json:"JournalLine"`
}
