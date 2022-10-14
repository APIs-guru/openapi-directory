package shared

import (
	"time"
)

type JournalInstructionJournalInstructionAccountingTypeAccountingTypeEnum string

const (
	JournalInstructionJournalInstructionAccountingTypeAccountingTypeEnumCredit JournalInstructionJournalInstructionAccountingTypeAccountingTypeEnum = "Credit"
	JournalInstructionJournalInstructionAccountingTypeAccountingTypeEnumDebit  JournalInstructionJournalInstructionAccountingTypeAccountingTypeEnum = "Debit"
)

type JournalInstructionJournalInstructionJournalInstruction struct {
	AccountingType *JournalInstructionJournalInstructionAccountingTypeAccountingTypeEnum `json:"AccountingType,omitempty"`
	Description    *string                                                               `json:"Description,omitempty"`
	EndDate        *time.Time                                                            `json:"EndDate,omitempty"`
	Expression     *string                                                               `json:"Expression,omitempty"`
	JournalLineTag *string                                                               `json:"JournalLineTag,omitempty"`
	LedgerTarget   *string                                                               `json:"LedgerTarget,omitempty"`
	NomCode        *string                                                               `json:"NomCode,omitempty"`
	StartDate      *time.Time                                                            `json:"StartDate,omitempty"`
	SubNomCode     *string                                                               `json:"SubNomCode,omitempty"`
}

type JournalInstruction struct {
	JournalInstruction *JournalInstructionJournalInstructionJournalInstruction `json:"JournalInstruction,omitempty"`
}
