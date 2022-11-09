import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum JournalInstructionJournalInstructionAccountingTypeEnum {
    Credit = "Credit"
,    Debit = "Debit"
}


export class JournalInstructionJournalInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountingType" })
  accountingType?: JournalInstructionJournalInstructionAccountingTypeEnum;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=Expression" })
  expression?: string;

  @Metadata({ data: "json, name=JournalLineTag" })
  journalLineTag?: string;

  @Metadata({ data: "json, name=LedgerTarget" })
  ledgerTarget?: string;

  @Metadata({ data: "json, name=NomCode" })
  nomCode?: string;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=SubNomCode" })
  subNomCode?: string;
}


export class JournalInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=JournalInstruction" })
  journalInstruction?: JournalInstructionJournalInstruction;
}
