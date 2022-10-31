package shared

import (
	"time"
)

type JournalInstructionJournalInstructionAccountingTypeEnum string

const (
	JournalInstructionJournalInstructionAccountingTypeEnumCredit JournalInstructionJournalInstructionAccountingTypeEnum = "Credit"
	JournalInstructionJournalInstructionAccountingTypeEnumDebit  JournalInstructionJournalInstructionAccountingTypeEnum = "Debit"
)

type JournalInstructionJournalInstruction struct {
	AccountingType *JournalInstructionJournalInstructionAccountingTypeEnum `json:"AccountingType,omitempty"`
	Description    *string                                                 `json:"Description,omitempty"`
	EndDate        *time.Time                                              `json:"EndDate,omitempty"`
	Expression     *string                                                 `json:"Expression,omitempty"`
	JournalLineTag *string                                                 `json:"JournalLineTag,omitempty"`
	LedgerTarget   *string                                                 `json:"LedgerTarget,omitempty"`
	NomCode        *string                                                 `json:"NomCode,omitempty"`
	StartDate      *time.Time                                              `json:"StartDate,omitempty"`
	SubNomCode     *string                                                 `json:"SubNomCode,omitempty"`
}

type JournalInstruction struct {
	JournalInstruction *JournalInstructionJournalInstruction `json:"JournalInstruction,omitempty"`
}
