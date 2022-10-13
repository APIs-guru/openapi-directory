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
	AccountingType *JournalInstructionJournalInstructionAccountingTypeAccountingTypeEnum `json:"AccountingType"`
	Description    *string                                                               `json:"Description"`
	EndDate        *time.Time                                                            `json:"EndDate"`
	Expression     *string                                                               `json:"Expression"`
	JournalLineTag *string                                                               `json:"JournalLineTag"`
	LedgerTarget   *string                                                               `json:"LedgerTarget"`
	NomCode        *string                                                               `json:"NomCode"`
	StartDate      *time.Time                                                            `json:"StartDate"`
	SubNomCode     *string                                                               `json:"SubNomCode"`
}

type JournalInstruction struct {
	JournalInstruction *JournalInstructionJournalInstructionJournalInstruction `json:"JournalInstruction"`
}
