import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum JournalInstructionJournalInstructionAccountingTypeEnum {
    Credit = "Credit",
    Debit = "Debit"
}
export declare class JournalInstructionJournalInstruction extends SpeakeasyBase {
    accountingType?: JournalInstructionJournalInstructionAccountingTypeEnum;
    description?: string;
    endDate?: Date;
    expression?: string;
    journalLineTag?: string;
    ledgerTarget?: string;
    nomCode?: string;
    startDate?: Date;
    subNomCode?: string;
}
export declare class JournalInstruction extends SpeakeasyBase {
    journalInstruction?: JournalInstructionJournalInstruction;
}
